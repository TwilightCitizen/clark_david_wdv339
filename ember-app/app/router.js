/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import EmberRouter from '@ember/routing/router';

// Application Imports

import config from 'ember-app/config/environment';

// Definition

class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('search-results');
  this.route('not-found', { path: '/*path' });
});

// Exports

export default Router;
