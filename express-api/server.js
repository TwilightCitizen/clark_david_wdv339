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
// const dotenv = require('dotenv');
// const cors = require('cors');
// const morgan = require('morgan');

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// Application Imports

// const spotify = require('./routes/spotify');
// const error = require('./routes/error');

import spotify from './routes/spotify.js';
import error from './routes/error.js';

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
server.use(error);

// Server Invocation

server.listen(API_PORT);

// Exports

// None