/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

// Application Imports

import SpotifyApi from '../services/spotify-api';

// Definition

class SearchBarComponent extends Component {
  @service SpotifyApi;
  @tracked searchTerms;
  @tracked searchDisabled = true;
  @tracked search;

  subscription = this.SpotifyApi.search.subscribe({
    next: (v) => this.search = v
  });

  willDestroy() {
    super.willDestroy(...arguments);
    this.subscription.unsubscribe;
  }

  get searchProgressStyle() {
    return htmlSafe(
      `z-index: +2; display: ${this.search?.pending ? 'block;' : 'none;'}`
    );
  }

  @action setSearchTerms(event) {
    this.searchTerms = event.target.value;
    this.searchDisabled = this.search?.pending || this.searchTerms === '';
  }

  @action submit(event) {
    event.preventDefault();
    this.SpotifyApi.searchFor(this.searchTerms);
  }
}

// Exports

export default SearchBarComponent;
