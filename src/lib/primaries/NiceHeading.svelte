<script lang="ts">
  export let level: 1 | 2 | 3 = 1;
</script>

{#if level === 1}
  <h1><slot /></h1>
{:else if level === 2}
  <h2><slot /></h2>
{:else if level === 3}
  <h3><slot /></h3>
{/if}

<style lang="scss">
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
  }
</style>
