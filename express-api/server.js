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

const {
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

server.use('*', (req, res, next) => {
  const error = new Error();
  
  error.status = 404;
  error.message = 'Not Found';
  
  next(error);
});

server.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ message: error.message });
});

// Server Invocation

server.listen(API_PORT);

// Exports

// None