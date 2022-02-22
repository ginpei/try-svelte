<script>
  import LoginScreen from "$lib/screens/login/LoginScreen.svelte";
  import { loginUser } from "../../stores";
  import DashboardPage from "./_DashboardPage.svelte";
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

{#if $loginUser}
  <DashboardPage />
{:else}
  <LoginScreen title="Dashboard" />
{/if}
