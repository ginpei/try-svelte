<script>
  import LoginScreen from "$lib/screens/login/LoginScreen.svelte";
  import { loginUser } from "$lib/data/userStore";
  import NoteListPage from "./_NoteListPage.svelte";
</script>

<svelte:head>
  <title>Note list</title>
</svelte:head>

{#if $loginUser}
  <NoteListPage />
{:else}
  <LoginScreen title="Note list" />
{/if}
