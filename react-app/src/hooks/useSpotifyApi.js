/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { useFetch } from 'react-async';

// Environment Configuration

const {
  REACT_APP_SPOTIFY_URL,
  REACT_APP_API_SCHEME,
  REACT_APP_API_HOST,
  REACT_APP_API_PORT,
  REACT_APP_API_BASE_URL
} = process.env;


// Definitions

const API_URL = [
  REACT_APP_API_SCHEME, '://',
  REACT_APP_API_HOST, ':',
  REACT_APP_API_PORT,
  REACT_APP_API_BASE_URL,
  REACT_APP_SPOTIFY_URL,
].join('');

const accept = { Accept: 'application/json' };
const getHeaders = { ...accept };

const useSpotifyApi = () => {
  const {
    data: getLoginData,
    error: getLoginError,
    isPending: getLoginIsPending,
    run: getLoginRun,
    reload: getLoginReload
  } = useFetch(
    `${API_URL}/login`,
    { headers: getHeaders },
    { defer: true }
  );
  
  const {
    data: getStatusData,
    error: getStatusError,
    isPending: getStatusIsPending,
    run: getStatusRun,
    reload: getStatusReload
  } = useFetch(
    `${API_URL}/status`,
    { headers: getHeaders },
    { defer: true }
  );
  
  const {
    data: getSearchData,
    error: getSearchError,
    isPending: getSearchIsPending,
    run: getSearchRun,
    reload: getSearchReload
  } = useFetch(
    '',
    { headers: getHeaders },
    { defer: true }
  );
  
  const getLogin = {
    getLoginData,
    getLoginError,
    getLoginIsPending,
    getLoginRun,
    getLoginReload
  };
  
  const getStatus = {
    getStatusData,
    getStatusError,
    getStatusIsPending,
    getStatusRun,
    getStatusReload
  };
  
  const getSearch = {
    getSearchData,
    getSearchError,
    getSearchIsPending,
    
    getSearchRun: searchTerms => getSearchRun({
      resource: `${API_URL}/search?q=${encodeURIComponent(searchTerms)}`
    }),
    
    getSearchReload
  };
  
  return ({
    getLogin,
    getStatus,
    getSearch
  });
};

// Exports

export default useSpotifyApi;