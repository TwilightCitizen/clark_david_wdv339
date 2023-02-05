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

import Header from '../components/Header';

// Definition

const WithLayout = Page => props => {
  return (
    <>
      <Header />
      <Page {...props} />
    </>
  );
};

// Exports

export default WithLayout;