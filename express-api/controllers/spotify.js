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

// Application Imports

import spotifyTokenRepository from '../models/spotifyToken.js';

// Environment Configuration

dotenv.config();

const local = dotenv.config({ path: path.resolve(process.cwd(), './.env.local') });

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

let spotifyTokenID;

const authPayload = new Buffer
  .from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)
  .toString('base64');

const redirectUrl = `${API_SCHEME}://${API_HOST}:${API_PORT}${API_BASE_URL}${SPOTIFY_URL}/auth`;
const authUrl = 'https://accounts.spotify.com/authorize';
const tokenUrl = 'https://accounts.spotify.com/api/token';

const fetchOptions = {
  method: 'post',
  
  headers: {
    'Authorization': `Basic ${authPayload}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

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
    ...fetchOptions,
    body: body
  })
  
  .then(res => res.json())
  .then(spotifyToken => spotifyTokenRepository.save(spotifyToken))
  
  .then(id => {
    spotifyTokenID = id;
    
    return true;
  })
  
  .catch(error => {
    console.error(error);
    
    return false;
  })
};

const token = async (req, res, next) => {
  fetchToken(bodyForToken(req.query.code));
  
};

const login = (req, res, next) => {
  const query = queryString.stringify({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: redirectUrl,
    state: 'unimplemented'
  });

  res.redirect(`${authUrl}?${query}`);
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

export {
  token,
  login,
  auth,
  status,
  search
};