<!--
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
-->

<script>
  // Library Imports

  import { onDestroy } from 'svelte';
  
  // Application Imports
  
  import { search, searchFor } from '$lib/spotify-api';
  import { searchedFor } from '$lib/contra-easter-egg';

  // Definitions
  
  let searchStatus;
  let searchTerms = '';

  const subscription = search.subscribe({
    next: (v) => searchStatus = v
  });
  
  const onSubmit = (event) => {
    event.preventDefault();
    searchFor(searchTerms);
    searchedFor(searchTerms);
  
    searchTerms = '';
  }
  
  onDestroy(() => subscription.unsubscribe);
</script>

<style>
  #search-overlay {
    z-index: +2;
    display: none;
  }

  #search-overlay.pending {
    display: block;
  }
  
  #search-terms {
    z-index: +1;
  }
</style>

<form
  class="flex flex-row flex-grow-1 h2 justify-center ml1 ml2-m ml3-l relative"
  on:submit={onSubmit}
>
  <div
    id="search-overlay"
    class="h2 bg-green br4 shadow-1 w-100 progress-bar absolute o-50"
    class:pending={searchStatus?.pending}
  >
  </div>
  
  <input
    id="search-terms"
    aria-label="Search Terms"
    type="text"
    placeholder="Enter an artist, album, or track name, and tap search. &rarr;"
    class="flex-grow-1 pa1 br4 bw0 tc outline-0"
    bind:value={searchTerms}
    disabled={searchStatus?.pending}
  />
  
  <input
    id="submit"
    aria-label="Submit"
    type="submit"
    value="Submit"
    style="margin-left: -0.75em;"
    disabled={search?.pending || searchTerms === ""}
    
    class="\
      flex-grow-0 br4 br--right bw0 pl3 outline-0 \
        {search?.pending || searchTerms === '' ? '' :
          'bg-light-green black-80 hover-bg-black-80 hover-white'}"
  />
</form>