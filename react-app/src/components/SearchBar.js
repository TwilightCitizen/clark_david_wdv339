/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { useContext, useEffect } from 'react';

// Application Imports

import { SearchResultsContext } from '../App';
import useSpotifyApi from '../hooks/useSpotifyApi';

// Definition

const SearchBar = () => {
  const [, setSearchResults] = useContext(SearchResultsContext);
  
  const {
    getSearch: {
      getSearchData,
      getSearchError,
      getSearchRun
    }
  } = useSpotifyApi();
  
  useEffect(() => {
    if (getSearchData) setSearchResults(getSearchData);
    if (getSearchError) setSearchResults(null);
  }, [getSearchData, getSearchError]);
  
  return (
    <>
      <p>SearchBar Component</p>
      
      <button
        onClick={() => getSearchRun('Sidewalks and Skeletons')}
      >
        Search
      </button>
    </>
  );
};

// Exports

export default SearchBar;