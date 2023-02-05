/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import path from 'path';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import queryString from 'query-string';
import { randomBytes } from 'crypto';

// Application Imports

import spotifyTokenRepository from '../models/spotifyToken.js';

// Environment Configuration

dotenv.config();

const local = dotenv.config({
  path: path.resolve(process.cwd(), './.env.local')
});

const {
  API_SCHEME,
  API_HOST,
  API_PORT,
  API_BASE_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_URL
} = {
  ...process.env,
  ...local.parsed
};

// Definitions

const millisInSeconds = 10; // 1000 // Artificially Shortened

const authPayload = new Buffer
  .from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)
  .toString('base64');

const redirectUrl = [
  API_SCHEME, '://',
  API_HOST, ':',
  API_PORT,
  API_BASE_URL,
  SPOTIFY_URL,
  '/auth'
].join('');

const authUrl = 'https://accounts.spotify.com/authorize';
const tokenUrl = 'https://accounts.spotify.com/api/token';
const searchUrl = 'https://api.spotify.com/v1/search';

const tokenOptions = {
  method: 'post',
  
  headers: {
    'Authorization': `Basic ${authPayload}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const searchOptions = req => ({
  method: 'get',
  
  headers: {
    'Authorization': 'Bearer ' + req.token.access_token,
    'Content-Type': 'application/json'
  }
});

const searchParams = req => queryString.stringify({
  type: 'album,artist,track',
  q: req.query.q,
  limit: 3
});

const bodyForToken = code => queryString.stringify({
  grant_type: 'authorization_code',
  code: code,
  redirect_uri: redirectUrl
});

const bodyForRefresh = refreshToken => queryString.stringify({
  grant_type: 'refresh_token',
  refresh_token: refreshToken
});

const fetchToken = body => {
  return fetch(tokenUrl, {
    ...tokenOptions,
    body: body
  })
  
  .then(res => res.json())
  
  .then(fetched => {
    fetched.expires_in = Date.now() + (
      fetched.expires_in * millisInSeconds
    );
    
    return Promise.all([
      spotifyTokenRepository.search().first(),
      fetched
    ]);
  })
  
  .then(([stored, fetched ]) => {
    if (stored) {
      stored.access_token = fetched.access_token;
      stored.expires_in = fetched.expires_in
      stored.refresh_token = fetched.refresh_token ?? stored.refresh_token
      
      return spotifyTokenRepository
        .save(stored)
        .then(() => spotifyTokenRepository.search().first());
    }
    
    return spotifyTokenRepository.createAndSave(fetched);
  })
  
  .catch(error => {
    console.error(error);
    
    return false;
  })
};

const isValid = spotifyToken =>
  spotifyToken?.expires_in > Date.now() || false;

const token = (req, res, next) => {
  const code = req.query.code;
  
  spotifyTokenRepository.search().first()
    .then(spotifyToken => {
      if (!spotifyToken && !code)
        return {};
      
      if (spotifyToken && isValid(spotifyToken))
        return spotifyToken;
      
      if(!spotifyToken && code)
        return fetchToken(bodyForToken(code))
          .then(spotifyToken => spotifyToken);
      
      if(spotifyToken && !isValid(spotifyToken))
        return fetchToken(bodyForRefresh(spotifyToken.refresh_token))
          .then(spotifyToken => spotifyToken);
    })
    
    .then(spotifyToken => {
      if (!spotifyToken)
        throw new Error('Error Requesting Spotify Token');
      
      req.token = spotifyToken;
      
      next();
    })
  
    .catch(error => next(error));
};

const login = (req, res, next) => {
  const query = queryString.stringify({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: redirectUrl,
    state: randomBytes(16).toString('hex')
  });

  res.redirect(`${authUrl}?${query}`);
};

const auth = (req, res, next) => {
  res.status(200).json({
    message: 'auth',
    token: req.token
  });
};

const status = (req, res, next) =>
  res.status(200).json({
    valid: isValid(req.token)
  });

const search = (req, res, next) => {
  fetch(`${searchUrl}?${searchParams(req)}`, {
    ...searchOptions(req),
  })
  
  .then(res => res.json())
  .then(json => res.status(200).json(json))
  .catch(error => next(error));
}

// Exports

export {
  token,
  login,
  auth,
  status,
  search
};