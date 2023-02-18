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
    name: 'SpotifyLogo',
    props: ['variant'],

    computed: {
      src() {
        return `spotify-logo-${this.variant}.png`;
      },

      alt() {
        return `Spotify Logo ${this.variant}`;
      }
    }
  }
</script>

<template>
  <img
      :src="src"
      :alt="alt"
      class='h2 h3-l flex-grow-0'
  />
</template>
