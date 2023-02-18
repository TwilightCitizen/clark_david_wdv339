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
  
  import SpotifyCard from '@/components/SpotifyCard.vue';
  
  export default {
    name: 'SpotifyCards',
    props: ['title', 'jsonData'],

    components: {
      SpotifyCard
    }
  }
</script>

<template>
  <div class='flex flex-column w-100'>
    <h1 class='tc f3 lh-copy'>{{title}}</h1>

    <div class='flex flex-row flex-wrap w-100 justify-center'>
      <template v-if='jsonData.items.length'>
        <SpotifyCard
          v-for='(item, index) in jsonData.items'
          :key='index'
          :jsonData='item'
        />
      </template>

      <template v-else>
        <p class='tc w-80 w-50-l'>
          Spotify returned exactly zero, nada, zilch {{title.toLowerCase()}}!  Maybe you searched for something stupid?  &#128556;
        </p>
      </template>
    </div>
  </div>
</template>
