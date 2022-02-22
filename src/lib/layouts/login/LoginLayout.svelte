<script lang="ts">
  import { loginUser } from "$lib/data/loginUserStore";
  import LoginScreen from "$lib/screens/login/LoginScreen.svelte";
  import VStack from "$lib/utils/VStack.svelte";
  import BasicFooter from "../common/BasicFooter.svelte";
  import BasicMainContents from "../common/BasicMainContents.svelte";
  import "../common/global.css";
  import LoginHeader from "./LoginHeader.svelte";

  const initialLoginUser = $loginUser;

  loginUser.subscribe((newLoginUser) => {
    if (!initialLoginUser && newLoginUser) {
      location.assign("/dashboard");
    }
  });
</script>

<VStack className="BasicLayout">
  <LoginHeader />

  <BasicMainContents>
    <LoginScreen title="Login" />
  </BasicMainContents>

  <BasicFooter />
</VStack>
