<script>
  import Container from "../../utils/Container.svelte";
</script>

<Container>
  <div class="mainContents">
    <slot />
  </div>
</Container>

<style>
  .mainContents {
    min-height: 50vh;
  }
</style>
