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
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// Definition

class SearchBarComponent extends Component {
  @tracked searchPending = false;
  @tracked searchTerms = '';
  @tracked searchDisabled = true;

  @action setSearchTerms(event) {
    this.searchTerms = event.target.value;
    this.searchDisabled = this.searchPending || this.searchTerms === ''
  }

  @action submit(event) {
    event.preventDefault();
  }
}

// Exports

export default SearchBarComponent;