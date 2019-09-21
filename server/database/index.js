const mysql = require('mysql');
const cloudinary = require('cloudinary').v2;// api for dealing with image DB, cloudinary
const config = require('../config.js');

const databaseConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// IF TRYING TO FIND A USER, LOOK AT GETUSER BELOW, decide which to use!!!!!!!!
// Both find users, from the DB and take all the info from them, find users actually passes the info in the .catch, while get users from the .then
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

// saves the user into the DB
const saveUser = (user) => new Promise((resolve, reject) => {
  const userInsert = 'INSERT INTO users(user_id, username, password, email, business) VALUES (DEFAULT, ?)';
  const insertValues = [user.username, user.password, user.email, user.business];

  databaseConnection.query(userInsert, [insertValues], (err, results, fields) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results, fields);
  });
});

// creates a running psts count into the DB
const saveUsersPostCount = (user_id) => new Promise((resolve, reject) => {
  const countInsert = 'INSERT INTO postCount(count, user_id) VALUES (DEFAULT, ?)';

  databaseConnection.query(countInsert, [user_id], (err, results) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results);
  });
});

// saves messages to the DB
const saveMessage = (message) => new Promise((resolve, reject) => {
  const messageInsert = 'INSERT INTO messages(mess_id, subject, content, recepient_id, sender_id) VALUES (DEFAULT, ?)';
  const insertValues = [message.subject, message.content, message.recepient, message.sender];

  databaseConnection.query(messageInsert, [insertValues], (err, results) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results);
  });
});

// saves posts to the DB
const savePost = (post) => new Promise((resolve, reject) => {
  const postInsert = 'INSERT INTO posts(post_id, text, img1, img2, img3, title, location, tagList, lumber, metal, concrete, glass, piping, user_id, zip) VALUES (DEFAULT, ?)';
  const insertValues = [post.text, post.img1, post.img2, post.img3, post.title, post.location, post.tagList, post.lumber, post.metal, post.concrete, post.glass, post.piping, post.user_id, post.zip];

  databaseConnection.query(postInsert, [insertValues], (err, results) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results);
  });
});
// increasts the coiunt of posts in the DB
const increasePostCount = (user_id) => new Promise((resolve, reject) => {
  const increaseInsert = 'UPDATE postCount SET count = count + 1 WHERE user_id = ?';

  databaseConnection.query(increaseInsert, [user_id], (err, results) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results);
  });
});

const displayPosts = () => new Promise((resolve, reject) => {
  const fetchedPosts = 'select posts.*, users.user_id from posts INNER JOIN users WHERE posts.user_id = users.user_id';
  databaseConnection.query(fetchedPosts, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});


cloudinary.config(config);// config object for connecting to cloudinary

const saveImage = (image) => cloudinary.uploader.upload(image.tempFilePath);

// allows you to select all the posts based upon hat type of material you wish
const searchTags = (tag) => new Promise((resolve, reject) => {
  const searchedTag = `SELECT * FROM posts WHERE ${tag.material} IS TRUE`;
  databaseConnection.query(searchedTag, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

const searchZip = (tag) => new Promise((resolve, reject) => {
  const searchedZip = `SELECT * FROM posts WHERE zip=${tag.material}`;
  databaseConnection.query(searchedZip, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

// gets user's inbox messages from db
const getMessages = (user) => new Promise((resolve, reject) => {
<<<<<<< HEAD
  const inbox = `SELECT messages.*, users.user_id FROM messages INNER JOIN users WHERE recepient_id= ${user}`;
=======
  const inbox = `SELECT * FROM messages WHERE recepient_id= "${user}"`;
>>>>>>> master
  databaseConnection.query(inbox, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

// grabs all the user info for each individual post
const getPostInfo = (user_id) => new Promise((resolve, reject) => {
  const user_idInsert = 'SELECT users.username, users.email, users.business FROM users WHERE user_id = ?';

  databaseConnection.query(user_idInsert, [user_id], (err, results) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results);
  });
});

const getMyPosts = (user_id) => new Promise((resolve, reject) => {
  const fetchedPosts = `SELECT * from posts WHERE user_id = '${user_id}'`;

  databaseConnection.query(fetchedPosts, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

const deletePost = (id) => new Promise((resolve, reject) => {
  const fetchedPosts = `delete from posts WHERE post_id= '${id}'`;

  databaseConnection.query(fetchedPosts, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

module.exports = {
  findUser,
  deletePost,
  getUser,
  databaseConnection,
  saveUser,
  savePost,
  increasePostCount,
  saveImage,
  saveUsersPostCount,
  saveMessage,
  displayPosts,
  searchTags,
  searchZip,
  getMessages,
  getMyPosts,
  getPostInfo,
};
