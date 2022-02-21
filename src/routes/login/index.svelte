<script lang="ts">
  import { loginUser } from "../../stores";
  import LoginPage from "./_LoginPage.svelte";
  import LogoutPage from "./_LogoutPage.svelte";
</script>

{#if $loginUser}
  <LogoutPage />
{:else}
  <LoginPage />
{/if}
