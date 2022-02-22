<script>
  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import VStack from "$lib/utils/VStack.svelte";
  import { loginUser } from "$lib/data/loginUserStore";

  if (!$loginUser) {
    throw new Error("This page is supposed for logged in user");
  }
</script>

<VStack>
  <BasicHeading>Dashboard</BasicHeading>
  <div>Hi, {$loginUser?.email}</div>
  <div>
    <a href="/login">Logout...</a>
  </div>
  <div>
    <a href="/notes">Note list</a>
  </div>
</VStack>
