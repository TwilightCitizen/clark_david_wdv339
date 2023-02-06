/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Application Imports

import Header from '../components/Header';

// Definition

const WithLayout = Page => props => {
  return (
    <>
      <Header />
  
      <div
        className="flex flex-column flex-grow-1 pa1 pa2-m pa3-l"
      >
        <Page {...props} />
      </div>
    </>
  );
};

// Exports

export default WithLayout;