const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
// const passport = require('passport');//for User authentication
// const flash = require('connect-flash');//for User authentication pop up notifications

const app = express();
const fileUpload = require('express-fileupload');// middleware that creates req.files object that contains files uploaded through frontend input
const cloudinary = require('cloudinary').v2;// api for dealing with image DB, cloudinary
const config = require('./config.js');
const { saveUser, savePost, increasePostCount, saveImage } = require('./database/index.js');

cloudinary.config(config);// config object for connecting to cloudinary

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../client/images')));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(fileUpload({
  useTempFiles: true,
}));


app.post('/signUp', (req, res) => {
  // need to verify that password matches, required fields submitted, etc
  // if user already exists, redirect back to sign-in
  // if username already taken, redirect back to sign-up

  const userInfo = {
    numPosts: 0,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    business: req.body.business,
  };
  saveUser(userInfo)
  // .then () start session with hashed sessionId and userId, etc
    .then(() => {
      res.status(201).send('user saved in db');
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send('something went wrong and user was not saved in db');
    });
});

app.post('/submitPost', (req, res) => {
  // need to authenticate user's credentials here.
  // if not logged in, re-route to sign-up page
  // then somehow pull their username out of the req.body, and use that in savePost() call below

  // TEMPORARY standin for userId. replace with actual data when it exists
  // const { userId } = verifySession;
  const { userId } = req.body;

  const post = {
    text: req.body.text,
    img1: req.body.img1,
    img2: req.body.img2 || null,
    img3: req.body.img3 || null,
    userId: req.body.userId,
  };

  savePost(post)
    .then(() => {
      increasePostCount(userId)
        .then(() => {
          res.status(201).send('got your post!');
        })
        .catch((error) => {
          console.log(error);
          res.status(404).send('something went wrong with your post');
        });
    });
});


app.post('/test', (req, res) => {
  const image = req.files.photo;

  // saveImage(image);
  cloudinary.uploader.upload(image.tempFilePath)
    .then((result) => {
      console.log(result);
      const hostedImageUrl = result.secure_url;
      res.send({ great: 'job!, you did image stuff!' });
    });
});

app.listen(PORT, () => {
  console.log('Bitches be crazy on: 8080');
});
