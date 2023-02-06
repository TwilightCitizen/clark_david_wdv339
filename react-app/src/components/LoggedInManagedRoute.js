/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { useContext } from "react";
import { Navigate } from 'react-router-dom';

// Application Imports

import { LoggedInContext } from '../App';

// Definition

const LoggedInManagedRoute = ({
  whenLoggedInIs, navigateTo, children
}) => {
  const [loggedIn] = useContext(LoggedInContext);
  
  return loggedIn === whenLoggedInIs
    ? <Navigate to={navigateTo} /> : children;
};

// Exports

export default LoggedInManagedRoute;