<script lang="ts">
  import EditorLayout from "../../../../lib/ui/layouts/editor/EditorLayout.svelte";
  import {
    initLoginUser,
    loginUser,
  } from "../../../../lib/data/loginUserStore";
  import LoginLayout from "../../../../lib/ui/layouts/login/LoginLayout.svelte";
  import LoadingScreen from "../../../../lib/ui/screens/loading/LoadingScreen.svelte";

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
  <EditorLayout loginUser={localLoginUser} />
{/if}
