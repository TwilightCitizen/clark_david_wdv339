<!--
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
-->

<script>
  // Definition
  
  let jsonData;
  
  // Exports
  
  export { jsonData };
</script>

<a
  class="flex flex-column w-100 w-40-m w-30-l bg-dark-green pa1 pa2-m pa3-l br4 ma1 ma2-m ma3-l no-underline white hover-bg-light-green hover-black-80"
  href={jsonData.external_urls.spotify}
  target="_blank" rel="noopener noreferrer"
>
  <img
    class="w-100 flex-grow-1 br4"
    src={jsonData.album?.images[0]?.url ?? jsonData?.images[0]?.url ?? "spotify-logo-green.png"}
    alt="Artist or Album Artwork"
  />
  
  <p class="flex-grow-0">{jsonData.name}</p>
</a>