/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

// Application Imports

import { loginUrl } from '../services/spotify-api';

// Definition

class LoginController extends Controller {
  @service SpotifyApi
  @tracked loginUrl = loginUrl;
}


// Exports

export default LoginController;
