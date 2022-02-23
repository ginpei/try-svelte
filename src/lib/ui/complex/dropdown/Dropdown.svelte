<script lang="ts">
  import { onMount } from "svelte";
  import type { OnPopupClose } from "../popup/popupMeta";
  import PopupOverlay from "../popup/PopupOverlay.svelte";

  export let elButton: HTMLElement;
  export let onClose: OnPopupClose;

  let right = 0;
  let top = 0;

  // to avoid "<PopupOverlay> was created without expected prop 'el'"
  let elOverlay = {} as HTMLElement;

  $: dropdownStyle = [
    `--dropdown-top: ${top}px`,
    `--dropdown-right: ${right}px`,
  ].join(";");

  onMount(() => {
    const rect = elButton.getBoundingClientRect();
    right = rect.left + rect.width;
    top = rect.bottom;
  });
</script>

<PopupOverlay bind:el={elOverlay} {onClose}>
  <div class="window" style={dropdownStyle}>
    <slot />
  </div>
</PopupOverlay>

<style>
  .window {
    bottom: var(--dropdown-bottom);
    left: var(--dropdown-left);
    position: absolute;
    right: calc(100vw - var(--dropdown-right));
    top: var(--dropdown-top);
  }
</style>
