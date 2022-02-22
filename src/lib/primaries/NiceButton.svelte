<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let el: HTMLButtonElement | undefined = undefined;

  const dispatch = createEventDispatcher();

  function onEvent(event: Event) {
    dispatch(event.type, event);
  }
</script>

<button bind:this={el} class="NiceButton" on:click={onEvent}>
  <slot />
</button>

<style>
  .NiceButton {
    min-height: 2rem;
  }
</style>
