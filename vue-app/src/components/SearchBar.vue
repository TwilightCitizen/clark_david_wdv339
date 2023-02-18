<!--
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
-->

<script>
  export default {
    name: 'SearchBar',

    data() {
      return {
        searchTerms: ''
      };
    },

    methods: {
      submit(e) {
        // searchFor(this.searchTerms);
        // searchedFor(this.searchTerms);

        this.searchTerms = '';
      }
    },

    computed: {
      searchStatus() {
        return ({
          data: null,
          error: false,
          pending: false
        });
      }
    }
  }
</script>

<template>
  <form
    class="flex flex-row flex-grow-1 h2 justify-center ml1 ml2-m ml3-l relative"
    @submit.prevent="submit"
  >
    <div
      id="search-overlay"
      class="h2 bg-green br4 shadow-1 w-100 progress-bar absolute o-50"
      :class="{ pending: searchStatus?.pending }"
    >
    </div>

    <input
      id="search-terms"
      aria-label="Search Terms"
      type="text"
      placeholder="Enter an artist, album, or track name, and tap search. &rarr;"
      class="flex-grow-1 pa1 br4 bw0 tc outline-0"
      v-model="searchTerms"
      :disabled="searchStatus?.pending"
    />

    <input
      id="submit"
      aria-label="Submit"
      type="submit"
      value="Submit"
      style="margin-left: -0.75em;"
      :disabled="searchStatus?.pending || searchTerms === ''"
      class="flex-grow-0 br4 br--right bw0 pl3 outline-0"
      :class="searchStatus?.pending ? 'bg-light-green black-80 hover-bg-black-80 hover-white' : ''"
    />
  </form>
</template>

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