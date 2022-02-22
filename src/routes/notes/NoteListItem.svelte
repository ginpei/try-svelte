<script lang="ts">
  import Tile from "$lib/complex/dialog/tile/Tile.svelte";
  import type { Note } from "$lib/data/Note";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import VStack from "$lib/utils/VStack.svelte";

  export let item: Note;
</script>

<Tile>
  <div class="content" slot="content">{item.name}</div>
  <div class="cover" slot="cover">
    <VStack>
      <NiceButton>Edit</NiceButton>
    </VStack>
  </div>
</Tile>

<style lang="scss">
  .content {
    display: grid;
    place-items: center;
  }

  .cover {
    align-items: center;
    display: grid;
    justify-items: stretch;
    padding: 1rem;
  }
</style>
