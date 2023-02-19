<!--
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
-->

<script setup>
  // Library Imports

  import { RouterView } from 'vue-router'

  // Application Imports

  import SpotifyLogo from '@/components/SpotifyLogo.vue';
  import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
  <header class="bg-dark-green flex flex-row flex-grow-0 items-center pa1 pa2-m pa3-l">
    <SpotifyLogo variant="white" />
    <SearchBar />
  </header>

  <RouterView />
</template>