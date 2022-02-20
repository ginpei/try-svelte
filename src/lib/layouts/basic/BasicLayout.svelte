<script lang="ts">
  import BasicFooter from "$lib/layouts/basic/BasicFooter.svelte";
  import Header from "$lib/layouts/basic/BasicHeader.svelte";
  import VStack from "$lib/utils/VStack.svelte";
  import BasicMainContents from "./BasicMainContents.svelte";
  import "./global.css";
</script>

<VStack className="BasicLayout">
  <Header />

  <BasicMainContents>
    <slot />
  </BasicMainContents>

  <BasicFooter />
</VStack>
