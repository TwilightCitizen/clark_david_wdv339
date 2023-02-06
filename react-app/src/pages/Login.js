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

import WithLayout from './WithLayout';
import useSpotifyApi from '../hooks/useSpotifyApi';

// Definition

const Login = () => {
  const { loginUrl } = useSpotifyApi();
  
  return (
    <a href={loginUrl}>Login</a>
  );
};

// Exports

export default WithLayout(Login);