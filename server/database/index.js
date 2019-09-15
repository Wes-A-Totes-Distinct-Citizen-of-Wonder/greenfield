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
      // console.log(err);
      return resolve(results);
    }
    return reject(user);
  });
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
    const postInsert = 'INSERT INTO posts(postId, text, img1, title, location, lumber, metal, concrete, glass, piping, userId) VALUES (DEFAULT, ?)';
    // assuming <post> parameter is an object
    const insertValues = [post.text, post.img1, post.title, post.location, post.lumber, post.metal, post.concrete, post.glass, post.piping, post.userId];

    databaseConnection.query(postInsert, [insertValues], (err, results) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(results); // need this?
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
// const fetchedPosts = 'select posts.*, users.* from posts inner join users order by posts.postId desc';
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

// const saveTags = (tags, postId) => new Promise((resolve, reject) => {
//   // const formattedTags = { ...tags.split('/').splice(1) };
//   const tagsInsert = 'INSERT INTO tags(tagId, tag1, tag2, tag3, tag4, tag5, postId) VALUES (DEFAULT, ?)';
//   // const insertValues = [formattedTags[0], formattedTags[1] || null, formattedTags[2] || null, formattedTags[3] || null, formattedTags[4] || null, postId];
//   databaseConnection.query(tagsInsert, [insertValues], (err, results) => {
//     if (err) {
//       return reject(err);
//     }
//     return resolve(results);
//   });
// });

const searchTags = (tag) => new Promise((resolve, reject) => {
//   // let currentTag;
//   // if(tag === "Lumber") {
//   //   currentTag = tag1
//   // } else if(tag === 'Metal') {
//   //   currentTag = tag2
//   // } else if(tag === 'Concrete'){
//   //   currentTag = tag3
//   // } else if(tag === 'Glass') {
//   //   currentTag = tag4
//   // } else if(tag === 'Piping') {
//   //   currentTag = tag5
//   // }

  // const searchedTag = `SELECT * FROM posts WHERE '${tag.material}' IS TRUE`;
  const searchedTag = `SELECT * FROM posts WHERE ${tag.material} IS TRUE`;
  // const searchedTag = 'SELECT * FROM posts WHERE lumber LIKE ? OR metal LIKE ? OR concrete LIKE ? OR glass LIKE ? OR piping LIKE ?';
  // const insertValues = [tag.lumber, tag.metal, tag.concrete, tag.glass, tag.piping];
  databaseConnection.query(searchedTag, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});
//  text,
//  img1,
//  title,
//  location,
//  tags,
//  username,
//  email,
//  business
//  FROM
//  posts
//  INNER JOIN
//  tags USING (postId)

//  order by posts.postId desc';


//     SELECT
//     orderNumber,
//     orderDate,
//     orderLineNumber,
//     productName,
//     quantityOrdered,
//     priceEach
// FROM
//     orders
// INNER JOIN
//     orderdetails USING (orderNumber)
// INNER JOIN
//     products USING (productCode)
// ORDER BY
//     orderNumber,
//     orderLineNumber;

//   //when someone clicks the "search by tags" button, the server will need this function
//   //to select * from posts and prob users.username/email/business inner join tags where posts.postId=tags.postId order by posts.postId desc
//   //then display those on the screen
//   //which means we'll need an app.get('/tagSearch') on server/index.js that calls this fn
//   //and we'll need to call
// })

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
  // saveTags,
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
