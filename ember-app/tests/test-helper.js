/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

// Application Imports

import Application from 'ember-app/app';
import config from 'ember-app/config/environment';

// Tests

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
