/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import Route from '@ember/routing/route';
import { service } from '@ember/service';

// Application Imports

import SpotifyApi from '../services/spotify-api';

// Definition

class LoginRoute extends Route {
  @service router;
  @service SpotifyApi;

  beforeModel(_transition) {
    this.SpotifyApi.loggedIn.then((v) => {
      if (v) this.router.replaceWith('search-results');
    });
  }
}

// Exports

export default LoginRoute;
