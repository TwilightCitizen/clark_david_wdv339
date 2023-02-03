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
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Application Imports

const spotify = require('./routes/spotify');

// Environment Configuration

dotenv.config();

// const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
// const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_URL,
  API_PORT,
  API_BASE_URL
} = process.env;

// Server Configuration

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('combined'));

server.use(`${API_BASE_URL}${SPOTIFY_URL}`, spotify);
console.log(`${API_BASE_URL}${SPOTIFY_URL}`);
server.use('/', (req, res, next) => {
  res
    .status(200)
    
    .json({
      SPOTIFY_CLIENT_ID,
      SPOTIFY_CLIENT_SECRET
    });
});

// Server Invocation

server.listen(API_PORT);

// Exports

// None