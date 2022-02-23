<script lang="ts">
  import type { OnPopupClose } from "./popupMeta";

  export let onClose: OnPopupClose;

  export let el: HTMLElement;

  function onOverlayClick(event: MouseEvent) {
    // clicked at somewhere inside
    if (event.target !== el) {
      return;
    }

    onClose("overlay", event);
  }

  function onKeyDwon(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onClose("escape", event);
      return;
    }
  }
</script>

<svelte:window on:keydown={onKeyDwon} />

<div class="PopupOverlay" bind:this={el} on:click={onOverlayClick}>
  <slot />
</div>

<style>
  .PopupOverlay {
    background-color: #0009;
    bottom: 0;
    display: grid;
    left: 0;
    overflow: auto;
    place-items: center;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  }
</style>
