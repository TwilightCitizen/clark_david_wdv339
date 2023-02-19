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
import NotFound from '@/views/NotFound.vue';
import { useLoggedIn } from '@/composables/useSpotifyApi';

// Definitions

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/search-results',
      name: 'SearchResults',
      component: SearchResults
    }, {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

router.beforeEach((to, from) => {
  if (to.path === '/') return { name: 'Login'};
  
  return useLoggedIn().then(loggedIn => {
    if (to.name === 'Login' && loggedIn) return { name: 'SearchResults' };
    if (to.name === 'SearchResults' && !loggedIn ) return { name: 'Login' };
  });
});

// Exports

export default router;
