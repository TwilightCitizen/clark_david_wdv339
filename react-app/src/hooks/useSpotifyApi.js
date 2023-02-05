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

// TODO: Define Environment Variables

const API_BASE_URL = '';

// Definitions

const accept = { Accept: 'application/json' };
const getHeaders = { ...accept };

const useSpotifyApi = () => {
  const {
    data,
    error,
    isPending,
    run,
    reload
  } = useFetch(
    `${API_BASE_URL}`,
    { headers: getHeaders },
    { defer: true }
  );
  
  return ({
  
  });
};

// Exports

export default useSpotifyApi;