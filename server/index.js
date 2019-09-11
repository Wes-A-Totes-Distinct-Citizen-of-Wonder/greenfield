const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
// const passport = require('passport');//for User authentication
// const flash = require('connect-flash');//for User authentication pop up notifications

const app = express();
const {
  saveUser, savePost, increasePostCount, saveUsersPostCount,
} = require('./database/index.js');

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../client/images')));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.post('/signUp', (req, res) => {
  // need to verify that password matches, required fields submitted, etc
  // if user already exists, redirect back to sign-in
  // if username already taken, redirect back to sign-up

  let userId;

  const userInfo = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    business: req.body.business,
  };
  saveUser(userInfo)
  // .then () start session with hashed sessionId and userId, etc
    .then((savedUser) => {
      userId = savedUser.insertId;
    })
    .then(() => {
      saveUsersPostCount(userId)
        .then(() => {
          res.status(201).send('user saved in db');
        })
        .catch((error) => {
          console.log(error);
          res.status(404).send('something went wrong and user was not saved in db');
        });
    });
});

app.post('/submitPost', (req, res) => {
  // need to authenticate user's credentials here.
  // if not logged in, re-route to sign-up page
  // then somehow pull their username out of the req.body, and use that in savePost() call below

  // TEMPORARY standin for userId. replace with actual data when it exists
  // const { userId } = verifySession;
  //const { userId } = req.body;

  const post = {
    img1: req.body.img1,
    text: req.body.text,
    title: req.body.title,
    tags: req.body.tags,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    // geolocationLat: null,
    // geolocationLng: null,
    // userId: req.body.userId,
  };

  savePost(post)
    .then(() => {
      const userId = 1;
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

app.listen(PORT, () => {
  console.log('Bitches be crazy on: 8080');
});
