<script lang="ts">
  import { onMount } from "svelte";
  import PopupOverlay from "../popup/PopupOverlay.svelte";
  import { moveFocus, setFirstFocus } from "../popup/popupFunctions";
  import type { OnDialogClose } from "./dialogMeta";
  import DialogWindow from "./DialogWindow.svelte";

  export let onClose: OnDialogClose;

  let elFrame: HTMLElement;

  onMount(() => {
    setFirstFocus(elFrame);
  });

  function onKeyDwon(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      moveFocus(elFrame, event.shiftKey);
      return;
    }
  }
</script>

<svelte:window on:keydown={onKeyDwon} />

<PopupOverlay
  bind:el={elFrame}
  {onClose}
  style="--popup-overlay--background-color: #0009"
>
  <DialogWindow>
    <slot />
  </DialogWindow>
</PopupOverlay>

<style>
</style>
