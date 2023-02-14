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

// Definition

class SearchResultsController extends Controller {
  @service SpotifyApi;
  @service ContraEasterEgg;
  @tracked search;

  spotifyApiSubscription = this.SpotifyApi.search.subscribe({
    next: (v) => this.search = v
  });

  contraEasterEggSubscription = this.ContraEasterEgg.wasFound.subscribe({
    next: () => alert('You Have 50 Lives')
  });

  willDestroy() {
    super.willDestroy(...arguments);
    this.spotifyApiSubscription.unsubscribe();
    this.contraEasterEggSubscription.unsubscribe()
  }
}

// Exports

export default SearchResultsController;
