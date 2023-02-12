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

// Definition

class IndexRoute extends Route {
  @service router;

  beforeModel(_transition) {
    this.router.replaceWith('login');
  }
}

// Exports

export default IndexRoute;
