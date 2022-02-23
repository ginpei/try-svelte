<script lang="ts">
  import NiceTextInput from "../primaries/NiceTextInput.svelte";

  export let label: string;
  export let name: string;
  export let type: "text" | "email" | "password" = "text";
  export let value: string;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="TextField">
  <span class="labelText">{label}</span>
  <NiceTextInput {name} {type} bind:value />
</label>

<style>
  .TextField {
    display: flex;
    flex-direction: column;
  }
</style>
