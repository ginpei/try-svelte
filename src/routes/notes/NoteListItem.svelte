<script lang="ts">
  import type { Note } from "$lib/data/Note";

  export let item: Note;
</script>

<div class="NoteListItem">
  <span>{item.name}</span>
</div>

<style lang="scss">
  .NoteListItem {
    border-radius: 0.2rem;
    border: thin solid gray;
    display: block;
    width: 200px;
    height: 200px;
  }
</style>
