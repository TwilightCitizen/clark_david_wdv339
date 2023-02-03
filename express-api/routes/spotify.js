/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

const express = require('express');
const spotify = express.Router();

// Application Imports

const {
  token,
  login,
  auth,
  status,
  search
} = require('../controllers/spotify');

// Definitions

spotify.get('/login', login);
spotify.get('/auth', token, auth);
spotify.get('/status', token, status);
spotify.get('/search', token, search);

// Exports

module.exports = spotify;