const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser   = require('body-parser');

const passport = require('passport');//for User authentication
const flash    = require('connect-flash');//for User authentication pop up notifications