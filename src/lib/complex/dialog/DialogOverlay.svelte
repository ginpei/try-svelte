<script lang="ts">
  export let onClick: (event: MouseEvent) => void;

  export let el: HTMLElement;

  function onOverlayClick(event: MouseEvent) {
    // clicked at somewhere inside
    if (event.target !== el) {
      return;
    }

    onClick(event);
  }
</script>

<div class="DialogOverlay" bind:this={el} on:click={onOverlayClick}>
  <slot />
</div>

<style>
  .DialogOverlay {
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
