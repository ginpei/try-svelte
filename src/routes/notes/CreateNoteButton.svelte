<script lang="ts">
  import type { OnDialogClose } from "$lib/complex/dialog/dialogMeta";
  import Tile from "$lib/complex/dialog/tile/Tile.svelte";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import CreateNoteDialog from "./CreateNoteDialog.svelte";

  let elButton: HTMLButtonElement;
  let dialogVisible = false;

  function onClick() {
    dialogVisible = true;
  }

  const onDialogClose: OnDialogClose = () => {
    dialogVisible = false;
    elButton.focus();
  };
</script>

<Tile>
  <div class="content" slot="content">+</div>
  <div class="cover" slot="cover">
    <NiceButton bind:el={elButton} on:click={onClick}>Create</NiceButton>
  </div>
</Tile>

{#if dialogVisible}
  <CreateNoteDialog onClose={onDialogClose} />
{/if}

<style lang="scss">
  .content {
    border-color: gray;
    display: grid;
    place-items: center;
  }

  .cover {
    align-items: center;
    display: grid;
    justify-content: stretch;
    padding: 1rem;
  }
</style>
