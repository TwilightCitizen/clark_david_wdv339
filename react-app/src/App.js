/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Application Imports

import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';

// Definitions

const LoggedInContext = createContext(null);
const SearchResultsContext = createContext(null);

const ProtectedSearchResults = () =>
  <ProtectedRoute>
    <SearchResults />
  </ProtectedRoute>

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState({});
  
  return (
    <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      <SearchResultsContext.Provider value={[searchResults, setSearchResults]}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/search-results" element={<ProtectedSearchResults />} />
            <Route path="/" exact element={<ProtectedSearchResults />} />
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
