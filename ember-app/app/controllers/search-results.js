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

import SpotifyApi from '../services/spotify-api';

// Definition

class SearchResultsController extends Controller {
  @service SpotifyApi;
  @tracked search;

  subscription = this.SpotifyApi.search.subscribe({
    next: (v) => this.search = v
  });

  willDestroy() {
    super.willDestroy(...arguments);
    this.subscription.unsubscribe;
  }
}

// Exports

export default SearchResultsController;
