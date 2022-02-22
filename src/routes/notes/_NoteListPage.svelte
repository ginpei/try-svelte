<script lang="ts">
  import type { Note } from "$lib/data/Note";

  import BasicHeading from "$lib/layouts/basic/BasicHeading.svelte";
  import VStack from "$lib/utils/VStack.svelte";
  import NoteListItem from "./NoteListItem.svelte";

  let numItems = 10;

  $: items = new Array(numItems).fill(0).map<Note>((v, i) => ({
    id: String(i + 1),
    name: `Item ${i + 1}`,
  }));
</script>

<VStack>
  <BasicHeading>Note list</BasicHeading>
  <div>
    Debug: num of items =
    <input
      bind:value={numItems}
      max={30}
      min={0}
      name="num-items"
      type="range"
    />
    {numItems}
  </div>
  <div class="noteList">
    {#each items as item}
      <NoteListItem {item} />
    {/each}
    <div />
    <div />
  </div>
</VStack>

<style lang="scss">
  $itemWidth: 200px;

  .noteList {
    display: grid;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, $itemWidth);
  }
</style>
