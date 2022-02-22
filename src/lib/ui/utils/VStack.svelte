<script lang="ts">
  /**
   * Extra global class names.
   * Note that these are not recognized by Svelte's style scope system.
   */
  export let className = "";
</script>

<div class={`${className} VStack`}>
  <slot />
</div>

<style>
  .VStack {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
