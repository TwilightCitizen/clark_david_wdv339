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

// Environment Configuration

dotenv.config();

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// Server Configuration

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('combined'));

server.use('*', (req, res, next) => {
  res
    .status(200)
    .json({
      spotifyClientId: SPOTIFY_CLIENT_ID,
      spotifyClientSecret: SPOTIFY_CLIENT_SECRET
    });
});

// Server Invocation

server.listen(3001);

// Exports

// None