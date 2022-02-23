<script lang="ts">
  import { loginUser } from "../../../data/loginUserStore";
  import { toDocTitle } from "../../../utils/page";
  import "../common/global.css";
  import bgImage from "./jonny-caspari-KuudDjBHIlA-unsplash.squashed.jpg";
  import LoginFooter from "./LoginFooter.svelte";
  import LoginForm from "./LoginForm.svelte";
  import LoginHeader from "./LoginHeader.svelte";

  const initialLoginUser = $loginUser;

  loginUser.subscribe((newLoginUser) => {
    if (!initialLoginUser && newLoginUser) {
      location.assign("/dashboard");
    }
  });
</script>

<svelte:head>
  <title>{toDocTitle("")}</title>
</svelte:head>

<div class="LoginLayout">
  <LoginHeader />
  <main class="loginMainContent" style="--background-image: url('{bgImage}')">
    <LoginForm />
  </main>
  <LoginFooter />
</div>

<style lang="scss">
  .LoginLayout {
    display: grid;
    grid-template-rows: min-content auto min-content;
    height: 100vh;
  }

  // bg image from https://unsplash.com/photos/KuudDjBHIlA
  .loginMainContent {
    background-color: black;
    background-image: var(--background-image); // given by style attr
    background-position: center center;
    background-size: cover;
    box-shadow: 0 0 30vmin #000 inset;
    display: grid;
    place-items: center;
  }
</style>
