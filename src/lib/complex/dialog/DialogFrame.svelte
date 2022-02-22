<script lang="ts">
  import { onMount } from "svelte";
  import { moveFocus, setFirstFocus } from "./dialogFunctions";
  import type { OnDialogClose } from "./dialogMeta";
  import DialogOverlay from "./DialogOverlay.svelte";
  import DialogWindow from "./DialogWindow.svelte";

  export let onClose: OnDialogClose;

  let elFrame: HTMLElement;

  onMount(() => {
    setFirstFocus(elFrame);
  });

  function onKeyDwon(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onClose("escape", event);
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      moveFocus(elFrame, event.shiftKey);
      return;
    }
  }

  function onOverlayClick(event: MouseEvent) {
    onClose("overlay", event);
  }
</script>

<svelte:window on:keydown={onKeyDwon} />

<DialogOverlay bind:el={elFrame} onClick={onOverlayClick}>
  <DialogWindow>
    <slot />
  </DialogWindow>
</DialogOverlay>

<style>
</style>
