<script>
  import { loginUser } from "$lib/data/loginUserStore";
  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import { toDocTitle } from "$lib/utils/page";
  import VStack from "$lib/utils/VStack.svelte";

  if (!$loginUser) {
    throw new Error("This page is supposed for logged in user");
  }
</script>

<svelte:head>
  <title>{toDocTitle("Dashboard")}</title>
</svelte:head>

<VStack>
  <BasicHeading>Dashboard</BasicHeading>
  <div>Hi, {$loginUser?.email}</div>
  <div>
    <a href="logout">Logout...</a>
  </div>
  <div>
    <a href="/notes">Note list</a>
  </div>
</VStack>
