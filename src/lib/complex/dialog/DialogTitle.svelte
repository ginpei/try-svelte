<script lang="ts">
  import type { OnDialogClose } from "./dialogMeta";

  export let onClose: OnDialogClose;

  function onCloseClick(event: Event) {
    onClose("closeButton", event);
  }
</script>

<header class="DialogTitle">
  <h1 class="title">
    <slot />
  </h1>
  <button class="close" title="Close" on:click={onCloseClick}>&times;</button>
</header>

<style>
  .DialogTitle {
    background-color: #ccc;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    padding: 0.5em 1em;
  }

  .title {
    font-size: 1rem;
    white-space: nowrap;
  }

  .close {
    background-color: initial;
    border: initial;
    font: initial;
    cursor: pointer;
  }
</style>
