/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { useContext } from 'react';

// Application Imports

import WithLayout from './WithLayout';
import { SearchResultsContext } from '../App';
import Logo from '../components/Logo';
import SpotifyCards from '../components/SpotifyCards';

// Definition

const SearchResults = () => {
  const [searchResults] = useContext(SearchResultsContext);
  
  return (
    <div className='flex flex-column flex-grow-1 justify-center items-center'>
      {searchResults.data ? null : <Logo variant='green' />}
      
      {searchResults.data
        ? <>
          <SpotifyCards
            title="Artists"
            fromSpotifyJsonData={searchResults.data.artists}
          />
    
          <SpotifyCards
            title="Albums"
            fromSpotifyJsonData={searchResults.data.albums}
          />
    
          <SpotifyCards
            title="Tracks"
            fromSpotifyJsonData={searchResults.data.tracks}
          />
        </>
        
        : searchResults.error
        
        ? <p className='tc w-80 w-50-l'>
            A horrible error corrupted your search!  It's probably your fault.  The guy that made this app is like really, REALLY good at coding, so...
        </p>
        
        : searchResults.pending
        
        ? <p className='tc w-80 w-50-l'>
            Hang on while we search for that stuff!  Hopefully you didn't search for something hard to find...
        </p>
        
        : <p className='tc w-80 w-50-l'>
            Why not try searching for something already? Artists, albums, and tracks aren't going to just search for themselves after all!
        </p>}
    </div>
  );
};

// Exports

export default WithLayout(SearchResults);