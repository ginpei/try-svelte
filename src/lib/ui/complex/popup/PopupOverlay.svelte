<script context="module" lang="ts">
  export type PopupOverlayTheme = {
    backgroundColor?: string;
  };
</script>

<script lang="ts">
  import type { OnPopupClose } from "./popupMeta";

  export let onClose: OnPopupClose;
  export let el: HTMLElement;
  export let theme: PopupOverlayTheme = {};

  $: style = [
    theme.backgroundColor &&
      `--popup-overlay--background-color: ${theme.backgroundColor}`,
  ]
    .filter((v) => v)
    .join(";");

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

<div class="PopupOverlay" bind:this={el} on:click={onOverlayClick} {style}>
  <slot />
</div>

<style>
  .PopupOverlay {
    background-color: var(--popup-overlay--background-color, transparent);
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
