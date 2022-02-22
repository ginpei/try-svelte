<script lang="ts">
  import { getUserById } from "$lib/data/userDb";
  import BasicLayout from "$lib/layouts/basic/BasicLayout.svelte";
  import LoadingScreen from "$lib/screens/loading/LoadingScreen.svelte";
  import { loginUser } from "../stores";

  // undefined until it gets the first value; User or null
  let localLoginUser: typeof $loginUser | undefined = undefined;

  _initLoginUser();

  async function _initLoginUser() {
    if (typeof window === "undefined") {
      return;
    }

    const userId = window.sessionStorage.getItem("userId");
    if (!userId) {
      loginUser.set(null);
      localLoginUser = null;
      return;
    }

    const user = await getUserById(userId);
    if (!user) {
      loginUser.set(null);
      localLoginUser = null;
      return;
    }

    loginUser.set(user);
    localLoginUser = user;
  }
</script>

{#if localLoginUser === undefined}
  <LoadingScreen />
{:else}
  <BasicLayout loginUser={$loginUser}>
    <slot />
  </BasicLayout>
{/if}
