/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports



// Application Imports

import WithLoggedInRedirect from './WithLoggedInRedirect';
import WithLayout from './WithLayout';

// Definition

const Login = () => {
  return (
    <p>Login Page</p>
  );
};

// Exports

export default WithLayout(
  WithLoggedInRedirect(Login, true, 'search-results')
);