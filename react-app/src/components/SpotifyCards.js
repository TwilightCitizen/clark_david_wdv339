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

import SpotifyCard from './SpotifyCard';

// Definition

const SpotifyCards = ({ title, fromSpotifyJsonData: jsonData }) => {
  return (
    <div className='flex flex-column w-100'>
      <h1 className='tc f3 lh-copy'>{title}</h1>
  
      <div className='flex flex-row flex-wrap w-100 justify-center'>
        {jsonData.items.length
          ? jsonData.items.map((item, index) =>
            <SpotifyCard
              key={index}
              fromSpotifyJsonData={item}
            />)
          
          : <p className="tc w-80 w-50-l">
            Spotify returned exactly zero, nada, zilch {title.toLowerCase()}!  Maybe you searched for something stupid?  &#128556;
          </p> }
      </div>
    </div>
  );
};

// Exports

export default SpotifyCards;