<script>
  // Library Imports
  
  import { page } from '$app/stores';
  
  // Application Imports
  
  import SpotifyLogo from '$lib/SpotifyLogo.svelte';
</script>

<div class="flex flex-column flex-grow-1 justify-center items-center">
  <SpotifyLogo variant="green" />
  <h1 class="f3 f2-m f1-l lh-copy">Error {$page.status} - {$page.error.message}! &#128559;</h1>
  
  <p class="f5 f3-m f2-l lh-copy tc w-80 w-50-l">
    OMG...  What did you do?  You broke it!
  </p>
  
  <p class="f5 f3-m f2-l lh-copy tc w-80 w-50-l">
    Just kidding!  &#128514;  Tap the button below to get somewhere normal.
  </p>
  
  <a
    href="/login"
    class="no-underline"
  >
    <p class="white bg-dark-green pa2 br4 no-underline hover-bg-light-green hover-black-80">
      The Button Below
    </p>
  </a>
</div>