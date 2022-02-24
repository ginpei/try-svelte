<script lang="ts">
  import logo from "./svelte-logo.svg";
</script>

<a class="NavBarAppLogo" href="/">
  <img class="titleLogo" src={logo} alt="My App" />
</a>
<div>
  <slot />
</div>

<style lang="scss">
  // .NavBarAppLogo {
  // }

  .titleLogo {
    height: 2rem;
    vertical-align: bottom;
    width: 4rem;
  }
</style>
