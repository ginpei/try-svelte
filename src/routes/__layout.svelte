<script lang="ts">
  import { initLoginUser, loginUser } from "$lib/data/loginUserStore";
  import BasicLayout from "$lib/layouts/basic/BasicLayout.svelte";
  import LoginLayout from "$lib/layouts/login/LoginLayout.svelte";
  import LoadingScreen from "$lib/screens/loading/LoadingScreen.svelte";

  // undefined until it gets the first value; User or null
  let localLoginUser: typeof $loginUser | undefined = undefined;

  initLoginUser((newLoginUser) => {
    localLoginUser = newLoginUser;
  });
</script>

{#if localLoginUser === undefined}
  <LoadingScreen />
{:else if localLoginUser === null}
  <!-- most pages requires login -->
  <LoginLayout />
{:else}
  <BasicLayout loginUser={$loginUser}>
    <slot />
  </BasicLayout>
{/if}
