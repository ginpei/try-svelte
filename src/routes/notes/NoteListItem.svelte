<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Note } from "../../lib/data/Note";
  import Tile from "../../lib/ui/complex/Tile.svelte";
  import NiceButton from "../../lib/ui/primaries/NiceButton.svelte";
  import VStack from "../../lib/ui/utils/VStack.svelte";

  export let item: Note;

  function formatTime(n: number) {
    const options: Intl.DateTimeFormatOptions = {
      dateStyle: "medium",
      timeStyle: "medium",
    };
    const dateTimeFormat = new Intl.DateTimeFormat("default", options);
    return dateTimeFormat.format(n);
  }

  function onEditClick() {
    goto(`/paints/${item.id}/edit`);
  }
</script>

<Tile>
  <div
    class="content"
    slot="content"
    style="--image-url: url('{item.thumbnail}')"
  >
    <div class="noteProperties">
      {item.name}
      <br />
      {formatTime(item.createdAt)}
    </div>
  </div>
  <div class="cover" slot="cover">
    <VStack>
      <NiceButton on:click={onEditClick}>Edit</NiceButton>
    </VStack>
  </div>
</Tile>

<style lang="scss">
  .content {
    background-image: var(--image-url);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .noteProperties {
    background-color: #fff9;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  .cover {
    align-items: center;
    display: grid;
    justify-items: stretch;
    padding: 1rem;
  }
</style>
