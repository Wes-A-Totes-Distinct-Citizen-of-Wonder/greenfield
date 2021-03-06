const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

const app = express();

const MySQLStore = require('express-mysql-session')(session);
const parseurl = require('parseurl');
const fileUpload = require('express-fileupload');// middleware that creates req.files object that contains files uploaded through frontend input
const cloudinary = require('cloudinary').v2;// api for dealing with image DB, cloudinary
const cloudinaryConfig = require('./config.js');//config file is gitignored b/c it holds API key. Won't appear in forked versions.
const { convertToCoordinates } = require('../client/src/helpers/geoLocation');

const {
  findUser, getUser, saveUser, savePost, increasePostCount, saveUsersPostCount, searchTags, displayPosts, getPostInfo,
} = require('./database/index.js');

//options used in sessionStore below
const options = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'trashPanda',
};
const sessionStore = new MySQLStore(options);

cloudinary.config(cloudinaryConfig);// config object for connecting to cloudinary

app.use(session({
  secret: 'trashPanda secret',
  cookie: {
    expires: 6000000,
  },
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(fileUpload({
  useTempFiles: true,
}));

//for reqs from endpoint /posts on frontend. Fetches posts from db and passes them to client to display on page
app.get('/posts', (req, res) => {
  displayPosts()
    .then((posts) => {
      res.status(201).send(posts);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('something went wrong and we cannot show you the posts right now');
    });
});

//for reqs from endpoint /userSession on frontend. Gets all info from the sessions table in the db
//(created by middleware; table can't be viewed in schema and isn't technically in schema in server/schema.sql,
//but data can be pulled from the table) and send it to frontend to save all session info there.
app.get('/userSession', (req, res) => {
  const {
    userId,
    isLoggedIn,
    username,
    email,
    buisness,
  } = req.session;

  const userInfo = {
    userId,
    isLoggedIn,
    username,
    email,
    buisness,
  };
  res.status(200).send(userInfo);
});

//for reqs from endpoint /signUp on frontend. Takes in user's info, makes sure that username doesn't
//already exist in the db. If not, it makes the user in the db table users, and creates a row in postCount table for that user
app.post('/signUp', (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  let userId;

  const userInfo = {
    username: req.body.username,
    password: hash,
    email: req.body.email,
    business: req.body.business,
  };

  return findUser(userInfo.username)
    .then(() => saveUser(userInfo))
    .then((savedUser) => {
      userId = savedUser.insertId;
    })
    .then(() => saveUsersPostCount(userId)
      .then(() => {
        res.status(201).send('user saved in db');
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send('something went wrong and user was not saved in db');
      }))
    .catch((user) => {
      res.status(409).send(user);
    });
});

//for reqs from endpoint /submitPost on frontend. Checks if user is logged in, and if not, tells them to sign up or log in.
//If they are logged in, makes tags string out of tags that the user clicked, makes post obj with all needed data from
//the req, uses cloudinary to host the image and return a url of the image's location to us, converts location to geolocation
//coordinates, save the post in the posts table in DB, increases user's postCount in table postCount in DB
app.post('/submitPost', (req, res) => {
  if (!req.session.isLoggedIn) {
    console.log(req.session.username);
    res.status(400).send('log in or signup!');
  } else {
    const image = req.files.photo;
    let tags = '';

    if (req.body.lumber === 'true') {
      tags += 'lumber ';
    } 
    if (req.body.metal === 'true') {
      tags += 'metal ';
    }
    if (req.body.concrete === 'true') {
      tags += 'concrete ';
    }
    if (req.body.glass === 'true') {
      tags += 'glass ';
    }
    if (req.body.piping === 'true') {
      tags += 'piping ';
    }

    const post = {
      text: req.body.text,
      img1: null,
      title: req.body.title,
      location: null,
      tagList: tags,
      lumber: req.body.lumber === 'true',
      metal: req.body.metal === 'true',
      concrete: req.body.concrete === 'true',
      glass: req.body.glass === 'true',
      piping: req.body.piping === 'true',
      userId: req.session.userId,
    };

    cloudinary.uploader.upload(image.tempFilePath)
      .then((result) => {
        post.img1 = result.secure_url;
        const {
          address, city, state, zip,
        } = req.body;
        const fullAddress = {
          address, city, state, zip,
        };

        return convertToCoordinates(fullAddress);
      })
      .then((geoLocation) => {
        const { location } = geoLocation.data.results[0].geometry;
        post.location = `${location.lat}, ${location.lng}`;
        return savePost(post);
      })
      .then(() => {
        increasePostCount(post.userId);
      })
      .then(() => {
        res.status(201).send('got your post!');
      })
      .catch((error) => {
        console.log(error);
        if (!image) {
          res.status(400).send('You must include a picture with your post.');
        } else {
          res.status(501).send('Something went wrong with your post!');
        }
      });
  }
});


app.post('/login', (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  return getUser(user.username)
    .then((response) => {
      const result = authorize(response, user);
      req.session.userId = result.userId;
      req.session.isLoggedIn = true;
      req.session.username = result.username;
      req.session.email = result.email;
      req.session.business = result.business;
      req.session.userId = result.userId;
      res.cookie('session_id', req.session.id);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
    });
});

//used in app.post('/login') above. Takes the user's info from login, checks it against user info in DB.
const authorize = (signIn, user) => {
  const foundUser = signIn[0];
  const passwordCheck = bcrypt.compareSync(user.password, foundUser.password);
  if (passwordCheck) {
    const returnUser = {
      userId: foundUser.userId,
      username: foundUser.username,
      email: foundUser.email,
      business: foundUser.business,
    };
    return (returnUser);
  }
  return ("password doesn't match!");
};

app.post('/logout', (req, res) => {
  req.session.isLoggedIn = false;
  res.status(201).send('great job');
});

//when a user clicks on button to search by a specific tag on the page, this grabs the clicked tag 
//from front end, and searches the db for posts with that tag.
app.post('/tagSearch', (req, res) => {
  searchTags(req.body)
    .then((posts) => {
      res.status(201).send(posts);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//when logged-in user clicks on a post, this fetches the data they want to see: the post's user's
//username, email, business name, the location of the materials, and the map for the location.
app.post('/postInfo', (req, res) => {
  getPostInfo(req.body.userId)
    .then((onePostInfo) => {
      res.status(201).send(onePostInfo);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  console.log('Contractors be listening on: 8080');
});
