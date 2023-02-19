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

  import { ref, unref } from 'vue';

  // Application Imports

  import { useSearch } from '@/composables/useSpotifyApi';

  const searchTerms = ref('');
  const { searchStatus } = useSearch(searchTerms);

  export default {
    name: 'SearchBar',

    data() {
      return {
        searchTerms: searchTerms,
        searchStatus: searchStatus
      };
    },

    methods: {
      clear() {
        this.searchTerms = '';
      }
    },

    computed: {
      hoverStyle() {
        return (
          unref(this.searchTerms) === '' ? '' :
            'bg-light-green black-80 hover-bg-black-80 hover-white'
        );
      },

      searchUnderlay() {
        return {
          'progress-bar': unref(this.searchStatus)?.pending,
          'bg-green': unref(this.searchStatus)?.pending
        };
      },

      clearDisabled() {
        return (
          unref(this.searchStatus)?.pending
          || unref(this.searchTerms) === ''
        );
      }
    }
  }
</script>

<template>
  <form
    class="flex flex-row flex-grow-1 h2 justify-center ml1 ml2-m ml3-l relative"
    @submit.prevent
  >
    <div
      id="search-underlay"
      class="h2 bg-white br4 shadow-1 w-100 absolute"
      :class="searchUnderlay"
    >
    </div>

    <input
      id="search-terms"
      aria-label="Search Terms"
      type="text"
      placeholder="Type to search for an artist, album, or track name."
      class="flex-grow-1 pa1 br4 bw0 tc outline-0 bg-transparent"
      v-model="searchTerms"
    />

    <input
      id="clear"
      aria-label="Clear"
      type="button"
      value="Clear"
      style="margin-left: -0.75em;"
      :disabled="clearDisabled"
      class="flex-grow-0 br4 br--right bw0 outline-0"
      :class="hoverStyle"
      @click="clear"
    />
  </form>
</template>

<style>
  #search-terms {
    z-index: +2;
  }

  #clear {
    z-index: +1;
  }
</style>