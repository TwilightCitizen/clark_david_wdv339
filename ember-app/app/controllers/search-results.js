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
import { tracked } from '@glimmer/tracking';

// Definition

class SearchResultsController extends Controller {
  @tracked searchResults = null;
  @tracked searchError = false;
  @tracked searchPending = false;
}

// Exports

export default SearchResultsController;
