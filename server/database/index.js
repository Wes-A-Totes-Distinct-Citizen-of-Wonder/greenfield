const mysql = require('mysql');
// did some research and mysql2 seems better than mysql so using it here instead
const cloudinary = require('cloudinary').v2;// api for dealing with image DB, cloudinary
const config = require('../config.js');

const databaseConnection = mysql.createConnection({
  // leaving this as localhost now, but I think it has to be changed for the deployed version
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'trashPanda',
  insecureAuth: true,
});

const saveUser = (user) =>
  // connection.connect();I don't think we need this, but leaving it here for now??
  new Promise((resolve, reject) => {
    // attempt to avoid sql injection. Not sure if this is completely correct though
    const userInsert = 'INSERT INTO users(userId, username, password, email, business) VALUES (DEFAULT, ?)';
    // assuming <user> parameter is an object
    const insertValues = [user.username, user.password, user.email, user.business];
    
    databaseConnection.query(userInsert, [insertValues], (err, results, fields) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(results, fields); // need this?
    });
    // connection.end(); I don't think we need this, but leaving it here for now??
  });

const saveUsersPostCount = (userId) => new Promise((resolve, reject) => {
  const countInsert = 'INSERT INTO postCount(count, userId) VALUES (DEFAULT, ?)';

  databaseConnection.query(countInsert, [userId], (err, results) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    return resolve(results); // need this?
  });
});

const savePost = (post) =>
  // connection.connect();I don't think we need this, but leaving it here for now??
  new Promise((resolve, reject) => {
    // attempt to avoid sql injection. Not sure if this is completely correct though
    const postInsert = 'INSERT INTO posts(postId, postText, img1, title) VALUES (DEFAULT, ?)';
    // assuming <post> parameter is an object
    const insertValues = [post.text, post.img1, post.title];

    databaseConnection.query(postInsert, [insertValues], (err, results, fields) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(results, fields); // need this?
    });
    // connection.end(); I don't think we need this, but leaving it here for now??
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
  const fetchedPosts = 'select posts.*, users.* from posts inner join users order by posts.postId desc';

  databaseConnection.query(fetchedPosts, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});


cloudinary.config(config);// config object for connecting to cloudinary

const saveImage = (image) => cloudinary.uploader.upload(image.tempFilePath);


module.exports = {
  databaseConnection,
  saveUser,
  savePost,
  increasePostCount,
  saveImage,
  saveUsersPostCount,
  displayPosts,
};


// Leaving all code below, which is for using MongoDB, just in case we decide to use it after all

// const mongoose = require('mongoose');

// //need to choose endpoint name, leaving it 'test' for now
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
//   .then(() => console.log('Connected to database'))
//   .catch(err => console.error('Failed to connect to database', err));


// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
//   business: String,
//   postNumber: Number,
//   userId: Number
// });

// const postSchema = new mongoose.Schema({
//   text: String,
//   userId: Number,
//   img: [ String ]
// });

// const User = mongoose.model('Users', userSchema);
// const Post = new mongoose.model('Posts', postSchema);


// //not sure if we want these functions here or if this is exactly how we'll use them,
// //but adding this to test for now
// const saveUser = (user) => {
//   const newUser = new User(user);

//   return new Promise((resolve, reject) => {
//     newUser.save((err, savedUser) => {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         console.log('saved to db');
//         resolve(savedUser);
//       }
//     });
//   });
// }

// const savePost = (post) => {
//   const newPost = new Post(post);

//   return new Promise((resolve, reject) => {
//     newPost.save((err, savedPost) => {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         console.log('saved to db');
//         resolve(savedPost);
//       }
//     });
//   });
// }

// module.exports = {
//   saveUser,
//   savePost
// };
