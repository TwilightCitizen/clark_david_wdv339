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


// Definition

const SearchResults = () => {
  const [searchResults] = useContext(SearchResultsContext)
  
  return (
    <>
      {searchResults
        ? <p>{JSON.stringify(searchResults)}</p>
        : <p>No Results</p>}
    </>
  );
};

// Exports

export default WithLayout(SearchResults);