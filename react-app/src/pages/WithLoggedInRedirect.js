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
import { Navigate } from 'react-router-dom';

// Application Imports

import { LoggedInContext } from '../App';

// Definition

const WithLoggedInRedirect = (Page, state, to) => props => {
  const [loggedIn] = useContext(LoggedInContext);
  
  return loggedIn === state
    ? <Page {...props} />
    : <Navigate to={to} />
};

// Exports

export default WithLoggedInRedirect;