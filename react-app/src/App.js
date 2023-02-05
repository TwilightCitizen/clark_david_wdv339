/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Application Imports

import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';
import useSpotifyApi from './hooks/useSpotifyApi';

// Definitions

const LoggedInContext = createContext(null);
const SearchResultsContext = createContext(null);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState({});
  
  const {
    getStatus: {
      getStatusData,
      getStatusError,
      getStatusRun
    }
  } = useSpotifyApi();
  
  useEffect(() => {
    if (!getStatusData) getStatusRun();
    if (getStatusData) setLoggedIn(getStatusData.valid);
    if (getStatusError) setLoggedIn(false);
  }, [getStatusData, getStatusError]);
  
  return (
    <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      <SearchResultsContext.Provider value={[searchResults, setSearchResults]}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/" exact element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SearchResultsContext.Provider>
    </LoggedInContext.Provider>
  );
}

// Exports

export default App;

export {
  LoggedInContext,
  SearchResultsContext
}
