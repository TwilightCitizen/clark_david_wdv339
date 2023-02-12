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

// Application Imports

import config from 'ember-app/config/environment';

// Definitions

const { spotifyUrl, scheme, host, port, baseUrl } = config.API;

const API_URL = [scheme, '://', host, ':', port, baseUrl, spotifyUrl].join('');

const loginUrl = `${API_URL}/login`;
const statusUrl = `${API_URL}/status`;
const getHeaders = { Accept: 'application/json' };

class SpotifyApiService extends Service {
  get loggedIn() {
    return (async () => {
      try {
        const response = await fetch(statusUrl, {
          headers: getHeaders,
        });

        const data = await response.json();

        return data.valid;
      } catch (_error) {
        return false;
      }
    })();
  }
}

// Exports

export default SpotifyApiService;

export { loginUrl };
