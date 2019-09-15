const mysql = require('mysql');
const cloudinary = require('cloudinary').v2;// api for dealing with image DB, cloudinary
const config = require('../config.js');

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'trashPanda',
  insecureAuth: true,
});

// IF TRYING TO FIND A USER, LOOK AT GETUSER BELOW, decide which to use!!!!!!!!
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const findUser = (user) => new Promise((resolve, reject) => {
  // select user from database if exists
  const foundUser = `SELECT * FROM users where username= "${user}"`;

  databaseConnection.query(foundUser, [user], (err, results, fields) => {
    if (results.length > 0) {
      return reject(user);
    }
    return resolve(results);
  });
});

// same code as above, just reversed the reject and resolve for login
const getUser = (user) => new Promise((resolve, reject) => {
  // select user from database if exists
  const foundUser = `SELECT * FROM users where username= "${user}"`;

  databaseConnection.query(foundUser, [user], (err, results, fields) => {
    if (results.length > 0) {
      return resolve(results);
    }
    return reject(user);
  });
});

const saveUser = (user) =>
  new Promise((resolve, reject) => {
    const userInsert = 'INSERT INTO users(userId, username, password, email, business) VALUES (DEFAULT, ?)';
    const insertValues = [user.username, user.password, user.email, user.business];

    databaseConnection.query(userInsert, [insertValues], (err, results, fields) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(results, fields);
    });
  });

const saveUsersPostCount = (userId) => new Promise((resolve, reject) => {
  const countInsert = 'INSERT INTO postCount(count, userId) VALUES (DEFAULT, ?)';

  databaseConnection.query(countInsert, [userId], (err, results) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results);
  });
});

const savePost = (post) =>
  new Promise((resolve, reject) => {
    const postInsert = 'INSERT INTO posts(postId, text, img1, title, location, lumber, metal, concrete, glass, piping, userId) VALUES (DEFAULT, ?)';
    const insertValues = [post.text, post.img1, post.title, post.location, post.lumber, post.metal, post.concrete, post.glass, post.piping, post.userId];

    databaseConnection.query(postInsert, [insertValues], (err, results) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(results);
    });
  });

const increasePostCount = (userId) => new Promise((resolve, reject) => {
  const increaseInsert = 'UPDATE postCount SET count = count + 1 WHERE userId = ?';

  databaseConnection.query(increaseInsert, [userId], (err, results) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results);
  });
});

const displayPosts = () => new Promise((resolve, reject) => {
  const fetchedPosts = 'select posts.*, users.userId from posts INNER JOIN users WHERE posts.userId = users.userId';
  databaseConnection.query(fetchedPosts, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});


cloudinary.config(config);// config object for connecting to cloudinary

const saveImage = (image) => cloudinary.uploader.upload(image.tempFilePath);

const searchTags = (tag) => new Promise((resolve, reject) => {
  const searchedTag = `SELECT * FROM posts WHERE ${tag.material} IS TRUE`;
  databaseConnection.query(searchedTag, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

module.exports = {
  findUser,
  getUser,
  databaseConnection,
  saveUser,
  savePost,
  increasePostCount,
  saveImage,
  saveUsersPostCount,
  displayPosts,
  searchTags,
};
