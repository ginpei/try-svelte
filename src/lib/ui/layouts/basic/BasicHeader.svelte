<script lang="ts">
  import { page } from "$app/stores";
  import type { User } from "../../../data/User";
  import Container from "../../utils/Container.svelte";
  import BasicHeaderNavItem from "./BasicNavBarLink.svelte";
  import logo from "../common/svelte-logo.svg";

  export let loginUser: User;
</script>

<header class="BasicHeader">
  <Container>
    <div class="contents">
      <a href="/">
        <img class="titleLogo" src={logo} alt="Try Svelte" />
      </a>
      <nav class="linkList">
        <BasicHeaderNavItem
          active={$page.url.pathname === "/dashboard"}
          href="/dashboard"
        >
          Dashboard
        </BasicHeaderNavItem>
        <BasicHeaderNavItem
          active={$page.url.pathname === "/notes"}
          href="/notes"
        >
          Notes
        </BasicHeaderNavItem>
        <BasicHeaderNavItem
          active={$page.url.pathname === "/templates"}
          href="/templates"
        >
          Templates
        </BasicHeaderNavItem>
      </nav>
      <div class="userTools">
        <BasicHeaderNavItem href="/dashboard">
          {loginUser.email}
        </BasicHeaderNavItem>
      </div>
    </div>
  </Container>
</header>

<style lang="scss">
  .BasicHeader {
    background-color: black;
    display: grid;
  }

  .contents {
    align-items: stretch;
    display: grid;
    gap: 1rem;
    grid-template-columns: max-content auto max-content;
  }

  .titleLogo {
    height: 2rem;
    vertical-align: bottom;
    width: 4rem;
  }

  .linkList {
    display: flex;
    gap: 1rem;
    overflow: auto;
  }
</style>
