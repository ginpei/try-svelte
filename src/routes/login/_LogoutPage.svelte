<script>
  import { setLoginUser } from "$lib/data/loginUserStore";
  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import VStack from "$lib/utils/VStack.svelte";

  function onLogoutClick() {
    setLoginUser(null);
  }
</script>

<VStack>
  <BasicHeading>Logout</BasicHeading>
  <NiceButton on:click={onLogoutClick}>Log out</NiceButton>
</VStack>
