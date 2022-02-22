<script lang="ts">
  import DialogBody from "$lib/complex/dialog/DialogBody.svelte";
  import DialogFooter from "$lib/complex/dialog/DialogFooter.svelte";
  import DialogFrame from "$lib/complex/dialog/DialogFrame.svelte";
  import type { OnDialogClose } from "$lib/complex/dialog/dialogMeta";
  import DialogTitle from "$lib/complex/dialog/DialogTitle.svelte";
  import NiceButton from "$lib/primaries/NiceButton.svelte";
  import VStack from "$lib/utils/VStack.svelte";

  export let onClose: OnDialogClose;

  function onOkClick(event: Event) {
    onClose("user", event);
  }
</script>

<DialogFrame {onClose}>
  <DialogTitle {onClose}>Create new note</DialogTitle>
  <DialogBody>
    <VStack>
      <input type="text" />
      <input autofocus type="text" />
      <input type="text" />
      <input type="text" />
    </VStack>
  </DialogBody>
  <DialogFooter>
    <NiceButton on:click={onOkClick}>OK</NiceButton>
  </DialogFooter>
</DialogFrame>
