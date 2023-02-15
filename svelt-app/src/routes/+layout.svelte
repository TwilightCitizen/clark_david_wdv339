<script>
  // Library Imports
  
  import { page } from '$app/stores';
  
  // Application Imports
  
  import SpotifyLogo from '$lib/SpotifyLogo.svelte';
</script>

{#if !$page.error}
  <header class="bg-dark-green flex flex-row flex-grow-0 items-center pa1 pa2-m pa3-l">
    <SpotifyLogo variant="white" />
  </header>
{/if}

<slot></slot>