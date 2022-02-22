<script lang="ts">
  import DialogBody from "$lib/ui/complex/dialog/DialogBody.svelte";
  import DialogFooter from "$lib/ui/complex/dialog/DialogFooter.svelte";
  import DialogFrame from "$lib/ui/complex/dialog/DialogFrame.svelte";
  import type { OnDialogClose } from "$lib/ui/complex/dialog/dialogMeta";
  import DialogTitle from "$lib/ui/complex/dialog/DialogTitle.svelte";
  import NiceButton from "$lib/ui/primaries/NiceButton.svelte";
  import VStack from "$lib/ui/utils/VStack.svelte";

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
