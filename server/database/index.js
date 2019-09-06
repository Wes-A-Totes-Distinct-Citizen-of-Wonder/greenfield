const mongoose = require('mongoose');

//need to choose endpoint name, leaving it 'test' for now
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Failed to connect to database', err));


const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  business: String,
  postNumber: Number,
  userId: Number
});

const postSchema = new mongoose.Schema({
  text: String,
  userId: Number,
  img: [ String ]
});

const User = mongoose.model('Users', userSchema);
const Post = new mongoose.model('Posts', postSchema);


//not sure if we want these functions here or if this is exactly how we'll use them, 
//but adding this to test for now
const saveUser = (user) => {
  const newUser = new User(user);

  return new Promise((resolve, reject) => {
    newUser.save((err, savedUser) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('saved to db');
        resolve(savedUser);
      }
    });
  });
}

const savePost = (post) => {
  const newPost = new Post(post);

  return new Promise((resolve, reject) => {
    newPost.save((err, savedPost) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log('saved to db');
        resolve(savedPost);
      }
    });
  });
}

module.exports = {
  saveUser,
  savePost
};