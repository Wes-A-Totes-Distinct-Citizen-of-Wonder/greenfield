const express = require('express');

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
// const passport = require('passport');//for User authentication
// const flash = require('connect-flash');//for User authentication pop up notifications

const app = express();
const path = require('path');
const { saveUser, savePost } = require('./database/index.js');

// app.use(express.static(path.join(__dirname, '../client/images')));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());

app.post('/submitPost', (req, res) => {
  // need to authenticate user's credentials here.
  // if not logged in, re-route to sign-up page
  // then somehow pull their username out of the req.body, and use that in savePost() call below

  // TEMPORARY standin for userId. replace with actual data when it exists
  const { userId } = verifySession;
  const post = {
    text: req.body.text,
    img1: req.body.img1,
    img2: req.body.img2 || null,
    img3: req.body.img3 || null,
    userId,
  };

  savePost(post)
    .then((savedPost) => {
      const { userId } = savedPost; // probably not correct but have to see the data to know what this will be in the body
      
    });
});


// app.post('/poll', (req, res) => {
//   let pollId;
//   let voteId;
//   // console.log(req.body); an obj, w/props pollTitle, option1, option2, option3,
//   // and I think bodyParser is parsing it into what I want, but not sure
//   // save poll to db
//   savePoll(req.body)
//     .then((results) => {
//       console.log(results);
//       pollId = results.insertId;
//       // res.status(201).send('got your poll!');
//     // })
//     // .catch((error) => {
//     //   console.log(error);
//     //   // res.status(404).send('something went wrong');
//     })
//     .then(() => {
//       saveVotes(req.body)
//         .then((results) => {
//           console.log(results);
//           voteId = results.insertId;
//           // res.status(201).send('got your poll!');
//         })
//         // .catch((error) => {
//         //   console.log(error);
//         //   // res.status(404).send('something went wrong');
//         // });
//       // })
//         .then(() => {
//           saveVotesAndPolls(pollId, voteId)
//             .then(() => {
//               console.log(pollId, voteId);
//               res.status(201).send('got your poll!');
//             })
//             .catch((error) => {
//               console.log(error);
//               res.status(404).send('something went wrong');
//             });
//         });
//     });
// });

// app.get('/seePolls', (req, res) => {
//   getPolls()
//     .then((result) => {
//       console.log(result);
//       res.send(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });


app.listen(PORT, () => {
  console.log('Bitches be crazy on: 8080');
});
