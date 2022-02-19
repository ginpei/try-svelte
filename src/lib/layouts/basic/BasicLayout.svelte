<script lang="ts">
	import BasicFooter from '$lib/layouts/basic/BasicFooter.svelte';
	import Header from '$lib/layouts/basic/BasicHeader.svelte';
import VStack from '$lib/utils/VStack.svelte';
  import BasicMainContents from './BasicMainContents.svelte';
</script>

<VStack className="BasicLayout">
  <Header />

  <BasicMainContents>
    <slot />
  </BasicMainContents>

  <BasicFooter />
</VStack>

<style global>
  @import '@fontsource/fira-mono';

  :root {
    font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-mono: 'Fira Mono', monospace;
    --pure-white: #ffffff;
    --primary-color: #b9c6d2;
    --secondary-color: #d0dde9;
    --tertiary-color: #edf0f8;
    --accent-color: #ff3e00;
    --heading-color: rgba(0, 0, 0, 0.7);
    --text-color: #444444;
    --background-without-opacity: rgba(255, 255, 255, 0.7);
    --column-width: 42rem;
    --column-margin-top: 4rem;
  }

  body {
    min-height: 100vh;
  }

  * {
    margin: 0;
  }

  /* TODO extract */
  fieldset {
    border-style: none;
    margin: 0;
    padding: 0;
}
</style>