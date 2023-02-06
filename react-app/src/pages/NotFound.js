/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { Link } from 'react-router-dom';

// Application Imports

import Logo from '../components/Logo';

// Definition

const NotFound = () => {
  return (
    <div className="flex flex-column flex-grow-1 justify-center items-center">
      <Logo variant="green" />
      <h1 className="f3 f2-m f1-l lh-copy">Error 404 - Not Found! &#128559;</h1>
      
      <p className="f5 f3-m f2-l lh-copy tc w-80 w-50-l">
        OMG...  What did you do?  You broke it!
      </p>
  
      <p className="f5 f3-m f2-l lh-copy tc w-80 w-50-l">
        Just kidding!  &#128514;  Tap the button below to get somewhere normal.
      </p>
      
      <Link
        to="/"
        className="no-underline"
      >
        <p className="white bg-dark-green pa2 br4 no-underline hover-bg-light-green hover-black-80">
          The Button Below
        </p>
      </Link>
    </div>
  );
};

// Exports

export default NotFound;