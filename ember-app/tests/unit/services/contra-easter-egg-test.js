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

module('Unit | Service | contra-easter-egg', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:contra-easter-egg');
    assert.ok(service);
  });
});
