/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

// Application Imports

import config from 'ember-app/config/environment';


// Definition

class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

// Exports

export default App;
