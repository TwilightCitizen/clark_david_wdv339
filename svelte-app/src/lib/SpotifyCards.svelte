<!--
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
-->

<script>
  // Imports
  
  import SpotifyCard from "$lib/SpotifyCard.svelte";
  
  // Definitions
  
  let title
  let jsonData;
  
  // Exports
  
  export { title, jsonData };
</script>

<div class="flex flex-column w-100">
  <h1 class="tc f3 lh-copy">{title}</h1>
  
  <div class="flex flex-row flex-wrap w-100 justify-center">
    {#each jsonData.items as item, index (index)}
      <SpotifyCard
        jsonData={item}
      />
    {:else}
      <p class="tc w-80 w-50-l">
        Spotify returned exactly zero, nada, zilch {title.toLowerCase()}}!  Maybe you searched for something stupid?  &#128556;
      </p>
    {/each}
  </div>
</div>