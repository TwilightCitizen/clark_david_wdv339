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

// Application Imports

const spotifyTokenRepository = require('../models/spotifyToken');

// Environment Configuration

dotenv.config({ path: path.join(__dirname, '../.env.local')});
dotenv.config();

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET
} = process.env;

// Definitions

let spotifyTokenID;

const token = async (req, res, next) => {
  spotifyTokenRepository
    .then(repository => repository.fetch(spotifyTokenID))
    
    .then(spotifyToken => {
      req.token = spotifyToken
  
      next();
    });
};

const login = (req, res, next) => {
  spotifyTokenRepository
    .then(repository => {
      const spotifyToken = repository.createEntity({
        access_token: 'Access Token',
        token_type: 'Token Type',
        expires_in: new Date().getTime() + 10000, // 10 seconds later
        refresh_token: 'Refresh Token',
      });
    
      spotifyTokenID = spotifyToken.entityId;
      
      return repository.save(spotifyToken);
    })
  
    .then(spotifyToken => {
      res.status(200).json({ message: 'login' });
    });
};

const auth = (req, res, next) => {
  res.status(200).json({ message: 'auth', token: req.token });
};

const status = (req, res, next) => {
  res.status(200).json({ valid: req.token.isValid });
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