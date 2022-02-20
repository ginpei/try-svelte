<script lang="ts">
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
