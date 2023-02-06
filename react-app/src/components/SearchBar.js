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
    <form className="flex flex-row flex-grow-1 justify-center ml1 ml2-m ml3-l">
      <input
        type="text"
        placeholder="Enter an artist, album, or track name, and tap search. &rarr;"
        className="flex-grow-1 pa1 br4 bw0 tc"
        style={{ zIndex: +1 }}
      />
      
      <button
        type="button"
        className="flex-grow-0 br4 br--right bw0 bg-light-green black-80 pl3 hover-bg-black-80 hover-white"
        style={{ marginLeft: "-0.75em" }}
        
        onClick={event => {
          event.preventDefault();
          getSearchRun('Sidewalks and Skeletons');
        }}
      >
        Search
      </button>
    </form>
  );
};

// Exports

export default SearchBar;