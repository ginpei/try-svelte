<script lang="ts">
  import type { User } from "../../../data/User";
  import Header from "./BasicHeader.svelte";
  import BasicFooter from "../common/BasicFooter.svelte";
  import VStack from "../../utils/VStack.svelte";
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
