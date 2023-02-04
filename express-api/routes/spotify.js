/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

// const express = require('express');
// const spotify = express.Router();

import express from 'express';

// Application Imports

import {
  token,
  login,
  auth,
  status,
  search
} from '../controllers/spotify.js'

// Definitions

const spotify = express.Router();

spotify.get('/login', login);
spotify.get('/auth', token, auth);
spotify.get('/status', token, status);
spotify.get('/search', token, search);

// Exports

export default spotify;