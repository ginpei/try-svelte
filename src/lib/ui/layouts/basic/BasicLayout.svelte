<script lang="ts">
  import type { User } from "$lib/data/User";
  import Header from "$lib/ui/layouts/basic/BasicHeader.svelte";
  import BasicFooter from "$lib/ui/layouts/common/BasicFooter.svelte";
  import VStack from "$lib/ui/utils/VStack.svelte";
  import BasicMainContents from "../common/BasicMainContents.svelte";
  import "../common/global.css";

  export let loginUser: User;
</script>

<VStack className="BasicLayout">
  <Header {loginUser} />

  <BasicMainContents>
    <slot />
  </BasicMainContents>

  <BasicFooter />
</VStack>
