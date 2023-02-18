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

  import { loginUrl } from '$lib/spotify-api';
</script>

<div class="flex flex-column flex-grow-1 justify-center items-center">
  <h1 class="f3 lh-copy">Please Login</h1>
  
  <p class="tc w-80 w-50-l">
    If you don't log in, nothing else will happen, and that wouldn't be that much fun now, would it?  Just tap the button below to make fun stuff happen.  Go ahead.  You know you want to...
  </p>
  
  <a
    href={loginUrl}
    class="white bg-dark-green pa2 br4 no-underline hover-bg-light-green hover-black-80"
  >
    Login
  </a>
</div>