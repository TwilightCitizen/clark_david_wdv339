/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { redirect } from '@sveltejs/kit';

// Application Imports

import { loggedIn } from '$lib/spotify-api.js';

// Definition

const load = async () => {
  if (!await loggedIn()) throw redirect(307, '/login');
}

// Exports

export { load };