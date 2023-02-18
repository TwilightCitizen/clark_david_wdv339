<!--
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
-->

<script>
  // Application Imports
  
  import SpotifyLogo from '@/components/SpotifyLogo.vue';
  import SpotifyCards from '@/components/SpotifyCards.vue';
  
  export default {
    name: 'SearchResults',

    components: {
      SpotifyLogo,
      SpotifyCards
    },

    computed: {
      searchStatus() {
        return ({
          results: null,
          pending: false,
          error: false
        });
      }
    }
  }
</script>

<template>
  <div class="flex flex-column flex-grow-1 justify-center items-center">
    <SpotifyLogo v-if="true" variant="green" />

    <template v-if="searchStatus.results">
      <SpotifyCards
        title="Artists"
        :jsonData="searchStatus.results.artists"
      />

      <SpotifyCards
        title="Albums"
        :jsonData="searchStatus.results.albums"
      />

      <SpotifyCards
        title="Tracks"
        :jsonData="searchStatus.results.tracks"
      />
    </template>

    <template v-else-if="searchStatus.error">
      <p class="tc w-80 w-50-l">
        A horrible error corrupted your search!  It's probably your fault.  The guy that made this app is like really, REALLY good at coding, so...
      </p>
      {:else if searchStatus.pending}
      <p class="tc w-80 w-50-l">
        Hang on while we search for that stuff!  Hopefully you didn't search for something hard to find...
      </p>
    </template>

    <p v-else class="tc w-80 w-50-l">
      Why not try searching for something already? Artists, albums, and tracks aren't going to just search for themselves after all!
    </p>
  </div>
</template>