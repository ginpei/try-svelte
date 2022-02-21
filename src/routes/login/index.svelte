<script lang="ts">
  import { loginUser } from "../../stores";
  import LoginPage from "./_LoginPage.svelte";
  import LogoutPage from "./_LogoutPage.svelte";
</script>

<svelte:head>
  <title>{$loginUser ? "Logout" : "Login"}</title>
</svelte:head>

{#if $loginUser}
  <LogoutPage />
{:else}
  <LoginPage />
{/if}
