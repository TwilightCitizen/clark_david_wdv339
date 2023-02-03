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

// Definitions

spotify.get('/login', (req, res, next) => {
  res.status(200).json({ message: 'login' });
});

spotify.get('/auth', (req, res, next) => {
  res.status(200).json({ message: 'auth' });
});

spotify.get('/token', (req, res, next) => {
  res.status(200).json({ message: 'token' });
});

spotify.get('/status', (req, res, next) => {
  res.status(200).json({ message: 'token' });
});

spotify.get('/search', (req, res, next) => {
  res.status(200).json('search');
});

// Exports

module.exports = spotify