/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { useContext, useEffect, useState } from 'react';

// Application Imports

import { SearchResultsContext } from '../App';
import useSpotifyApi from '../hooks/useSpotifyApi';

// Definition

const SearchBar = () => {
  const [, setSearchResults] = useContext(SearchResultsContext);
  const [searchTerms, setSearchTerms] = useState('');
  
  const {
    getSearch: {
      getSearchData,
      getSearchError,
      getSearchIsPending,
      getSearchRun
    }
  } = useSpotifyApi();
  
  useEffect(() => {
    if (getSearchData) setSearchResults(getSearchData);
    if (getSearchError) setSearchResults(null);
  }, [getSearchData, getSearchError]);
  
  const searchDisabled = getSearchIsPending || searchTerms === '';
  
  return (
    <form className="flex flex-row flex-grow-1 h2 justify-center ml1 ml2-m ml3-l relative">
      <div
        className="h2 bg-green br4 shadow-1 w-100 progress-bar absolute o-50"
        
        style={{
          zIndex: +2,
          display: `${getSearchIsPending ? "block" : "none"}`
        }}
      >
      </div>
      
      <input
        type="text"
        placeholder="Enter an artist, album, or track name, and tap search. &rarr;"
        className="flex-grow-1 pa1 br4 bw0 tc outline-0"
        value={searchTerms}
        onChange={event => setSearchTerms(event.target.value)}
        style={{ zIndex: +1 }}
        disabled={getSearchIsPending}
      />
      
      <button
        type="button"
        style={{ marginLeft: "-0.75em" }}
        disabled={searchDisabled}
        
        className={
          `flex-grow-0 br4 br--right bw0 pl3 outline-0
          
          ${searchDisabled ? '' :
            'bg-light-green black-80 hover-bg-black-80 hover-white'
          }`
        }
        
        onClick={event => {
          event.preventDefault();
          getSearchRun(searchTerms);
        }}
      >
        Search
      </button>
    </form>
  );
};

// Exports

export default SearchBar;