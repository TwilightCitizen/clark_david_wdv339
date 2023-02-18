/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { createRouter, createWebHistory } from 'vue-router';


// Application Imports

import Login from '@/views/Login.vue';
import SearchResults from '@/views/SearchResults.vue';

// Definition

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/search-results',
      name: 'searchResults',
      component: SearchResults
    }, {
      path: '/*',
      name: 'notFound',
      component: null
    }
  ]
})

// Exports

export default router;
