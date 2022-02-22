<script lang="ts">
  import { initLoginUser, loginUser } from "$lib/data/loginUserStore";
  import BasicLayout from "$lib/ui/layouts/basic/BasicLayout.svelte";
  import LoginLayout from "$lib/ui/layouts/login/LoginLayout.svelte";
  import LoadingScreen from "$lib/ui/screens/loading/LoadingScreen.svelte";

  // undefined until it gets the first value; User or null
  let localLoginUser: typeof $loginUser | undefined = undefined;

  initLoginUser((newLoginUser) => {
    if (localLoginUser !== undefined) {
      return;
    }

    localLoginUser = newLoginUser;
  });
</script>

{#if localLoginUser === undefined}
  <LoadingScreen />
{:else if localLoginUser === null}
  <!-- most pages requires login -->
  <LoginLayout />
{:else}
  <BasicLayout loginUser={localLoginUser}>
    <slot />
  </BasicLayout>
{/if}
