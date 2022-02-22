<script lang="ts">
  import Container from "$lib/utils/Container.svelte";
  import logo from "../common/svelte-logo.svg";
</script>

<header class="BasicHeader">
  <Container>
    <a href="/">
      <img class="titleLogo" src={logo} alt="Try Svelte" />
    </a>
  </Container>
</header>

<style lang="scss">
  .BasicHeader {
    background-color: black;
    display: grid;
    height: 2rem;
    line-height: 2rem;
  }

  .titleLogo {
    height: 2rem;
    vertical-align: bottom;
    width: 4rem;
  }
</style>
