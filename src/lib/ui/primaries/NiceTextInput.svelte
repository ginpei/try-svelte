<script lang="ts">
  // note: add any acceptable attr in need

  export let disabled = false;
  export let name: string;
  export let readonly = false;
  export let type: "text" | "email" | "password" = "text";
  export let value: string;

  // You cannot use `{type}` with `bind:value={xxx}`
  // > 'type' attribute cannot be dynamic if input uses two-way bindingsvelte(invalid-type)
  function onInput(event: Event) {
    value = (event.currentTarget as HTMLInputElement).value;
  }
</script>

<input
  class="NiceTextInput"
  {disabled}
  {name}
  {readonly}
  {type}
  {value}
  on:input={onInput}
/>

<style>
  .NiceTextInput {
    box-sizing: border-box;
    display: block;
    min-height: 2rem;
  }
</style>
