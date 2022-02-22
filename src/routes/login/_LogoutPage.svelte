<script>
  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import VStack from "$lib/utils/VStack.svelte";
  import { loginUser } from "../../stores";

  function onLogoutClick() {
    // TODO extract
    window.sessionStorage.removeItem("userId");
    $loginUser = null;
  }
</script>

<VStack>
  <BasicHeading>Logout</BasicHeading>
  <NiceButton on:click={onLogoutClick}>Log out</NiceButton>
</VStack>
