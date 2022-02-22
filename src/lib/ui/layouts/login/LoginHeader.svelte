<script lang="ts">
  import logo from "../common/svelte-logo.svg";
</script>

<header class="LoginHeader">
  <img class="titleLogo" src={logo} alt="Try Svelte" />
</header>

<style lang="scss">
  .LoginHeader {
    background-color: black;
    display: grid;
    height: 2rem;
    line-height: 2rem;
    place-items: center;
  }

  .titleLogo {
    height: 2rem;
    vertical-align: bottom;
    width: 4rem;
  }
</style>
