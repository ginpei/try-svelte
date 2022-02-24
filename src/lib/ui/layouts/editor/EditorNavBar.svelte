<script lang="ts">
  import type { User } from "../../../data/User";
  import UserDropdown from "../basic/UserDropdown.svelte";
  import NavBarAppLogo from "../common/NavBarAppLogo.svelte";

  export let loginUser: User;
</script>

<header class="EditorNavBar">
  <NavBarAppLogo />
  <UserDropdown {loginUser} />
</header>

<style lang="scss">
  .EditorNavBar {
    background-color: black;
    display: flex;
    height: 2rem;
    justify-content: space-between;
    line-height: 2rem;
    padding: 0 1rem;
  }
</style>
