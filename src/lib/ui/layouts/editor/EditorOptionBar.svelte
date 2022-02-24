<script lang="ts">
  import IconButton from "../../simple/IconButton.svelte";
</script>

<div class="EditorOptionBar">
  <div class="group">
    <IconButton>☕</IconButton>
    <IconButton>☕</IconButton>
    <IconButton>☕</IconButton>
    <IconButton>☕</IconButton>
    <IconButton>☕</IconButton>
  </div>
  <div class="group">
    <IconButton>☕</IconButton>
    <IconButton>☕</IconButton>
    <IconButton>☕</IconButton>
  </div>
  <div class="group">
    <IconButton>☕</IconButton>
  </div>
</div>

<style lang="scss">
  .EditorOptionBar {
    background-color: #f9f9f9;
    display: flex;
    height: 2rem;
    padding: 0 1rem;
  }

  .group {
    align-items: center;
    display: flex;
    gap: 0.1rem;

    & + & {
      border-left: thin solid lightgray;
      margin-left: 1rem;
      padding-left: 1rem;
    }
  }
</style>
