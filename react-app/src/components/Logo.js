/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Definition

const Logo = ({ variant }) => {
  return (
    <img
      src={`spotify-logo-${variant}.png`}
      alt={`Spotify Logo ${variant}`}
      className="h2 h3-l flex-grow-0"
    />
  );
}

// Exports

export default Logo;