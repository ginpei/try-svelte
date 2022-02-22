<script lang="ts">
  import type { OnDialogClose } from "./dialogMeta";
  import DialogOverlay from "./DialogOverlay.svelte";
  import DialogWindow from "./DialogWindow.svelte";

  export let onClose: OnDialogClose;

  function onOverlayClick(event: MouseEvent) {
    onClose("overlay", event);
  }
</script>

<DialogOverlay onClick={onOverlayClick}>
  <DialogWindow>
    <slot />
  </DialogWindow>
</DialogOverlay>

<style>
</style>
