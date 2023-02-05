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

import { /* TODO: Context */ } from '../App';

// Definition

const ProtectedRoute = ({ children }) => {
  const [context] = useContext(null);
  
  return context ? children : <Navigate to="/" />
};

// Exports

export default ProtectedRoute;