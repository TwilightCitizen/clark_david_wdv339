/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { BehaviorSubject } from 'rxjs';

// Definitions

const API = {
  spotifyUrl: '/spotify',
  scheme: 'http',
  host: '127.0.0.1',
  port: 3001,
  baseUrl: '/api/v1',
}

const API_URL = [
  API.scheme, '://',
  API.host, ':', API.port,
  API.baseUrl, API.spotifyUrl
].join('');

const loginUrl = `${API_URL}/login`;
const statusUrl = `${API_URL}/status`;
const getHeaders = { Accept: 'application/json' };

const searchUrl = terms =>
  `${API_URL}/search?q=${encodeURIComponent(terms)}`

const search = new BehaviorSubject({
  results: null,
  error: false,
  pending: false
});

const loggedIn = async () => {
  try {
    const response = await fetch(statusUrl, {
      headers: getHeaders
    });
    
    const data = await response.json();
    
    return data.valid;
  } catch (_error) {
    return false;
  }
}

const searchFor = async (terms) => {
  search.next({
    results: null,
    error: false,
    pending: true
  });
  
  try {
    const response = await fetch(searchUrl(terms), {
      headers: getHeaders
    });
    
    search.next({
      results: await response.json(),
      error: false,
      pending: false
    });
  } catch (_error) {
    search.next({
      results: null,
      error: true,
      pending: false
    });
  }
}

// Exports

export { loginUrl, loggedIn, search, searchFor };