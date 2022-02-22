<script lang="ts">
  import { scale } from "svelte/transition";
  import { defaultDialogScale } from "./dialogMeta";
</script>

<div class="DialogWindow" in:scale={defaultDialogScale}>
  <slot />
</div>

<style>
  .DialogWindow {
    background-color: white;
    border-radius: 0.2rem;
    border: thin solid gray;
    box-sizing: border-box;
    min-width: 300px;
    overflow: hidden;
  }
</style>
