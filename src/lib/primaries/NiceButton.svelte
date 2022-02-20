<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onEvent(event: Event) {
    dispatch(event.type, event);
  }
</script>

<button class="NiceButton" on:click={onEvent}>
  <slot />
</button>

<style>
  .NiceButton {
    min-height: 2rem;
  }
</style>
