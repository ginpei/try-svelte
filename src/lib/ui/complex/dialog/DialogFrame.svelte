<script lang="ts">
  import { onMount } from "svelte";
  import { setFirstFocus } from "../popup/popupFunctions";
  import PopupOverlay from "../popup/PopupOverlay.svelte";
  import type { OnDialogClose } from "./dialogMeta";
  import DialogWindow from "./DialogWindow.svelte";

  export let onClose: OnDialogClose;

  // to avoid "<PopupOverlay> was created without expected prop 'el'"
  let elFrame = {} as HTMLElement;

  onMount(() => {
    setFirstFocus(elFrame);
  });
</script>

<PopupOverlay bind:el={elFrame} {onClose} theme={{ backgroundColor: "#0009" }}>
  <DialogWindow>
    <slot />
  </DialogWindow>
</PopupOverlay>

<style>
</style>
