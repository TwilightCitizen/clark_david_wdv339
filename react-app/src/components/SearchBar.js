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
import useContraEasterEgg from '../hooks/useContraEasterEgg';

// Definition

const SearchBar = () => {
  const [, setSearchResults] = useContext(SearchResultsContext);
  const [searchTerms, setSearchTerms] = useState('');
  
  const [searchedFor] = useContraEasterEgg(() => {
    alert('You Have 50 Lives');
  });
  
  const {
    getSearch: {
      getSearchData,
      getSearchError,
      getSearchIsPending,
      getSearchRun
    }
  } = useSpotifyApi();
  
  useEffect(() => {
    if (getSearchData) {
      setSearchTerms('');
      
      setSearchResults(() => ({
        data: getSearchData,
        error: false,
        pending: false
      }));
    }
    
    if (getSearchError) {
      setSearchResults(() => ({
        data: null,
        error: true,
        pending: false
      }));
    }
    
    if (getSearchIsPending) {
      setSearchResults(() => ({
        data: null,
        error: false,
        pending: true
      }));
    }
  }, [getSearchData, getSearchError, getSearchIsPending]);
  
  const searchDisabled = getSearchIsPending || searchTerms === '';
  
  return (
    <form
      className='flex flex-row flex-grow-1 h2 justify-center ml1 ml2-m ml3-l relative'
      
      onSubmit={event => {
        event.preventDefault();
        if (!searchDisabled) {
          getSearchRun(searchTerms);
          searchedFor(searchTerms);
        }
      }}
    >
      <div
        className='h2 bg-green br4 shadow-1 w-100 progress-bar absolute o-50'
        
        style={{
          zIndex: +2,
          display: `${getSearchIsPending ? 'block' : 'none'}`
        }}
      >
      </div>
      
      <input
        type='text'
        placeholder='Enter an artist, album, or track name, and tap search. &rarr;'
        className='flex-grow-1 pa1 br4 bw0 tc outline-0'
        value={searchTerms}
        onChange={event => setSearchTerms(event.target.value)}
        style={{ zIndex: +1 }}
        disabled={getSearchIsPending}
      />
      
      <button
        type='submit'
        style={{ marginLeft: '-0.75em' }}
        disabled={searchDisabled}
        
        className={
          `flex-grow-0 br4 br--right bw0 pl3 outline-0
          
          ${searchDisabled ? '' :
            'bg-light-green black-80 hover-bg-black-80 hover-white'
          }`
        }
      >
        Search
      </button>
    </form>
  );
};

// Exports

export default SearchBar;