<script lang="ts">
import { session } from "$app/stores";
import type { User } from "$lib/db/user";
import LoginPage from "./_LoginPage.svelte";
import LogoutPage from "./_LogoutPage.svelte";

  let loginUser: User | null | undefined = undefined;

  session.subscribe(({ user }: { user: User | null }) => {
    loginUser = user;
  });
</script>

{#if loginUser === undefined}
  ...
{:else if loginUser}
  <LogoutPage />
{:else}
  <LoginPage />
{/if}
