/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { module, test } from 'qunit';
import { setupTest } from 'ember-app/tests/helpers';

// Tests

module('Unit | Route | search-results', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:search-results');
    assert.ok(route);
  });
});
