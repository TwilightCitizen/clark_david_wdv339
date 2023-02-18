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
  
  import { page } from '$app/stores';
  
  // Application Imports
  
  import SpotifyLogo from '$lib/SpotifyLogo.svelte';
  import SearchBar from '$lib/SearchBar.svelte';
</script>

{#if !$page.error}
  <header class="bg-dark-green flex flex-row flex-grow-0 items-center pa1 pa2-m pa3-l">
    <SpotifyLogo variant="white" />
    <SearchBar />
  </header>
{/if}

<div class="flex flex-column flex-grow-1 pa1 pa2-m pa3-l">
  <slot></slot>
</div>