/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { ref, unref, watchEffect } from 'vue';

// Definitions

const API = {
  spotifyUrl: '/spotify',
  scheme: 'http',
  host: '127.0.0.1',
  port: 3001,
  baseUrl: '/api/v1',
}

const API_URL = [
  API.scheme, '://',
  API.host, ':', API.port,
  API.baseUrl, API.spotifyUrl
].join('');

const loginUrl = `${API_URL}/login`;
const statusUrl = `${API_URL}/status`;
const getHeaders = { Accept: 'application/json' };

const searchUrl = terms =>
  `${API_URL}/search?q=${encodeURIComponent(terms)}`

const useLoggedIn = () => {
  return fetch(statusUrl, {
    headers: getHeaders
  })
    .then(response => response.json())
    .then(json => json.valid)
    .catch(() => false);
}

const useSearch = terms => {
  const searchStatus = ref({
    data: null,
    error: false,
    pending: false
  });
  
  const doSearch = (searchTerms) => {
    if (!searchTerms) return;
  
    searchStatus.value = ({
      data: null,
      error: false,
      pending: true
    });
    
    fetch(searchUrl(searchTerms, {
      headers: getHeaders
    }))
      .then(response => response.json())
      
      .then(json => searchStatus.value = ({
        data: json,
        error: false,
        pending: false
      }))
      
      .catch(() => searchStatus.value = ({
        data: null,
        error: true,
        pending: false
      }));
  };
  
  const debouncedSearch = (() => {
    let timer;
    
    return () => {
      const searchTerms = unref(terms);
      
      if (timer) clearTimeout(timer);
      
      timer = setTimeout(() => {
        doSearch(searchTerms);
      }, 1000);
    };
  })();
  
  watchEffect(debouncedSearch);
  
  return { searchStatus };
};

// Exports

export { loginUrl, useLoggedIn, useSearch };