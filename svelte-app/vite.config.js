/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Exported Definition

export default defineConfig({
	plugins: [sveltekit()],
  
  server: {
    port: 3000,
    strictPort: false,
  },
  
  preview: {
    port: 3000,
    strictPort: false,
  }
});
