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
import { setupRenderingTest } from 'ember-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// Tests

module('Integration | Component | spotify-cards', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SpotifyCards />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <SpotifyCards>
        template block text
      </SpotifyCards>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
