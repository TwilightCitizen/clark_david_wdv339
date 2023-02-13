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
import { tracked } from '@glimmer/tracking';

// Definition

class SearchResultsRoute extends Route {
  @service router;
  @service SpotifyApi;
  @tracked search;

  subscription = this.SpotifyApi.search.subscribe({
    next: (v) =>this.search = v
  });

  willDestroy() {
    super.willDestroy(...arguments);
    this.subscription.unsubscribe;
  }

  beforeModel(_transition) {
    this.SpotifyApi.loggedIn.then((v) => {
      if (!v) this.router.replaceWith('login');
    });
  }
}

// Exports

export default SearchResultsRoute;
