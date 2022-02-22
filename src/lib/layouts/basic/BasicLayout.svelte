<script lang="ts">
  import type { User } from "$lib/data/User";
  import BasicFooter from "$lib/layouts/basic/BasicFooter.svelte";
  import Header from "$lib/layouts/basic/BasicHeader.svelte";
  import VStack from "$lib/utils/VStack.svelte";
  import BasicMainContents from "./BasicMainContents.svelte";
  import "./global.css";

  export let loginUser: User | null;
</script>

<VStack className="BasicLayout">
  <Header {loginUser} />

  <BasicMainContents>
    <slot />
  </BasicMainContents>

  <BasicFooter />
</VStack>
