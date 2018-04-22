import express from 'express';
import keys from '../config/keys.js';
const stripe = require('stripe')(keys.stripeSecretKey);
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import Routes from './routes';
import { initiateDb } from './database';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/public/'), bodyParser()));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header("Access-Control-Allow-Headers", 
  "Token, UserId, Authorization, Username, Password, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', Routes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening to ${port}`)
  initiateDb((err) => {
    if (err) {
      console.log('ERROR ERROR ERROR', err);
    } else {
      console.log('SYSTEM ONLINE');
    }
  })
});
