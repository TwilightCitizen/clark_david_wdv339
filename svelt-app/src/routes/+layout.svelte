<script>
  import { page } from '$app/stores';
</script>

{#if !$page.error}
  <header>
    <p>Header</p>
  </header>
{/if}

<slot></slot>