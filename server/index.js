const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// const users = require('../server/database');

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
// const passport = require('passport');//for User authentication
// const flash = require('connect-flash');//for User authentication pop up notifications

const app = express();

const MySQLStore = require('express-mysql-session')(session);
const parseurl = require('parseurl');
const fileUpload = require('express-fileupload');// middleware that creates req.files object that contains files uploaded through frontend input
const cloudinary = require('cloudinary').v2;// api for dealing with image DB, cloudinary
const cloudinaryConfig = require('./config.js');
const { convertToCoordinates } = require('../client/src/helpers/geoLocation');

const {
  findUser, getUser, saveUser, savePost, increasePostCount, saveUsersPostCount, saveTags, searchTags, displayPosts,
} = require('./database/index.js');

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
// app.use(express.static(path.join(__dirname, '../client/images')));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(fileUpload({
  useTempFiles: true,
}));

app.get('/posts', (req, res) => {
  displayPosts()
    .then((posts) => {
      // debugger;
      res.status(201).send(posts);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('something went wrong and we cannot show you the posts right now');
    });
});

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

app.post('/signUp', (req, res) => {
  // need to verify that password matches, required fields submitted, etc
  // if user already exists, redirect back to sign-in
  // if username already taken, redirect back to sign-up
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
    .then(() => {
      return saveUser(userInfo)
    })
    // .then () start session with hashed sessionId and userId, etc
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


app.post('/submitPost', (req, res) => {
  // need to authenticate user's credentials here.
  // if not logged in, re-route to sign-up page


  if (!req.session.isLoggedIn) {
    console.log(req.session.username);
    res.status(400).send('log in or signup!');
  } else {
  // then somehow pull their username out of the req.body, and use that in savePost() call below

    // TEMPORARY standin for userId. replace with actual data when it exists
    // const { userId } = verifySession;

    // const to preserve tags for call to saveTags(tags) below
    // const { tags } = req.body;
    const image = req.files.photo;
    // const userId = 1;
    const post = {
      text: req.body.text,
      img1: null,
      title: req.body.title,
      location: null,
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
        const userId = 1;
        increasePostCount(userId);
      })
    // .then(() => {
    //   let postId = 2
    //   saveTags(tags, postId);
    // })
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
<<<<<<< HEAD

=======
>>>>>>> 28e2bf2f7d2e9ffa35d516cfba56345a3f30b451
  }
});

// app.use(function (req, res, next) {
//   if (!req.session.views) {
//     req.session.views = {}
//   }

//   // get the url pathname
//   var pathname = parseurl(req).pathname

//   // count the views
//   req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

//   next()
// })

// app.get('/foo', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
// })

app.post('/login', (req, res) => {
  // let authUser;
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
    // console.log('found User in DB')
    // })
    // .then(returnUser => {
    //   res.status(201).send(returnUser)
    // })
    // .catch((err) => {
    //   res.send(err)
    // })
    .catch((err) => {
<<<<<<< HEAD
      console.error(err);
      res.status(404).send('incorrect username or password');
=======
      res.status(404);
>>>>>>> 28e2bf2f7d2e9ffa35d516cfba56345a3f30b451
    });
});

app.delete('/logout', (req, res) => {
  req.session.isLoggedIn = false;
  res.status(201);
});

const authorize = (signIn, user) => {
  // return new Promise ((resolve, reject) => {
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


app.post('/tagSearch', (req, res) => {
  searchTags(req.body)
    .then((posts) => {
      res.status(201).send(posts);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  console.log('Bitches be crazy on: 8080');
});
