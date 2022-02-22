<script lang="ts">
  import LoginScreen from "$lib/screens/login/LoginScreen.svelte";
  import { loginUser } from "$lib/data/userStore";
  import LogoutPage from "./_LogoutPage.svelte";
</script>

<svelte:head>
  <title>{$loginUser ? "Logout" : "Login"}</title>
</svelte:head>

{#if $loginUser}
  <LogoutPage />
{:else}
  <LoginScreen title="Login" />
{/if}
