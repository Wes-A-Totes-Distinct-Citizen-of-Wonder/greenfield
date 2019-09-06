const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
// const passport = require('passport');//for User authentication
// const flash = require('connect-flash');//for User authentication pop up notifications

const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname, '../client/images')));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Bitches be crazy on: 8080');
});
