<script>
  import { setLoginUser } from "../../lib/data/loginUserStore";
  import BasicHeading from "../../lib/ui/layouts/basic/BasicHeading.svelte";
  import NiceButton from "../../lib/ui/primaries/NiceButton.svelte";
  import VStack from "../../lib/ui/utils/VStack.svelte";
  import { toDocTitle } from "../../lib/utils/page";

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
