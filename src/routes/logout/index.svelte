<script>
  import { setLoginUser } from "$lib/data/loginUserStore";
  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import { toDocTitle } from "$lib/utils/page";
  import VStack from "$lib/utils/VStack.svelte";

  function onLogoutClick() {
    setLoginUser(null);
    location.assign("/");
  }
</script>

<svelte:head>
  <title>{toDocTitle("Logout")}</title>
</svelte:head>

<VStack>
  <BasicHeading>Logout</BasicHeading>
  <NiceButton on:click={onLogoutClick}>Log out</NiceButton>
</VStack>
