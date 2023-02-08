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



// Definition

const SpotifyCard = ({ fromSpotifyJsonData: jsonData }) => {
  return (
    <a
      className="flex flex-column w-100 w-40-m w-30-l bg-dark-green pa1 pa2-m pa3-l br4 ma1 ma2-m ma3-l no-underline white hover-bg-light-green hover-black-80"
      href={jsonData.external_urls.spotify}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="w-100 flex-grow-1 br4"
        src={jsonData.album?.images[0].url ?? jsonData.images[0].url}
        alt="Artist or Album Artwork"
      />
      
      <p className="flex-grow-0">{jsonData.name}</p>
    </a>
  );
};

// Exports

export default SpotifyCard;