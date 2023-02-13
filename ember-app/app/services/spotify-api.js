/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import Service from '@ember/service';
import fetch from 'fetch';
import { BehaviorSubject } from 'rxjs';

// Application Imports

import config from 'ember-app/config/environment';

// Definitions

const {
  spotifyUrl,
  scheme,
  host,
  port,
  baseUrl
} = config.API;

const API_URL = [
  scheme, '://',
  host, ':', port,
  baseUrl, spotifyUrl
].join('');

const loginUrl = `${API_URL}/login`;
const statusUrl = `${API_URL}/status`;
const getHeaders = { Accept: 'application/json' };

const searchUrl = terms =>
  `${API_URL}/search?q=${encodeURIComponent(terms)}`

class SpotifyApiService extends Service {
  search = new BehaviorSubject({
    results: null,
    error: false,
    pending: false
  });

  get loggedIn() {
    return (async () => {
      try {
        const response = await fetch(statusUrl, {
          headers: getHeaders
        });

        const data = await response.json();

        return data.valid;
      } catch (_error) {
        return false;
      }
    })();
  }

  searchFor(terms) {
    this.search.next({
      results: null,
      error: false,
      pending: true
    });

    (async () => {
      try {
        const response = await fetch(searchUrl(terms), {
          headers: getHeaders
        });

        this.search.next({
          results: await response.json(),
          error: false,
          pending: false
        });
      } catch (_error) {
        this.search.next({
          results: null,
          error: true,
          pending: false
        });
      }
    })();
  }
}

// Exports

export default SpotifyApiService;

export { loginUrl };
