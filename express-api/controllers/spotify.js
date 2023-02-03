/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

const path = require('path');
const dotenv = require('dotenv');

// Environment Configuration

dotenv.config({ path: path.join(__dirname, '../.env.local')});
dotenv.config();

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET
} = process.env;

// Definitions

const token = (req, res, next) => {
  req.token = { token: 'token' };
  
  next();
};

const login = (req, res, next) => {
  res.status(200).json({ message: 'login' });
};

const auth = (req, res, next) => {
  res.status(200).json({ message: 'auth', ...req.token });
};

const status = (req, res, next) => {
  res.status(200).json({ message: 'status', ...req.token });
};

const search = (req, res, next) => {
  res.status(200).json({ message: 'search', ...req.token });
}

// Exports

module.exports = {
  token,
  login,
  auth,
  status,
  search
};