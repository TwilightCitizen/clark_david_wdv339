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

import { LoggedInContext } from '../App';
import SearchBar from './SearchBar';
import Logo from './Logo';

// Definition

const Header = () => {
  const [loggedIn] = useContext(LoggedInContext);
  
  return (
    <header
      className="bg-dark-green flex flex-row flex-grow-0 items-center pa1 pa2-m pa3-l"
    >
      <Logo variant="white" />
      
      {loggedIn
        ? <SearchBar />
        : null}
    </header>
  );
};

// Exports

export default Header;