/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { Navigate } from 'react-router-dom';

// Application Imports

import { LoggedInContext } from '../App';

// Definition

const WithLoggedInRedirect = (
  Page, whenLoggedInIs, navigateTo
) => props =>
  <LoggedInContext.Consumer>
    {([loggedIn]) =>
      loggedIn === whenLoggedInIs
        ? <Navigate to={navigateTo} />
        : <Page {...props} />}
  </LoggedInContext.Consumer>

// Exports

export default WithLoggedInRedirect;