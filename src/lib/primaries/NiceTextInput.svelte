<script lang="ts">
  // note: add any acceptable attr in need

  export let disabled: boolean = false;
  export let name: string;
  export let readonly: boolean = false;
  export let type: "text" | "email" | "password" = "text";
  export let value: string;
</script>

<input
  class="NiceTextInput"
  disabled={disabled}
  name={name}
  readonly={readonly}
  type={type}
  value={value}
>

<style>
  .NiceTextInput {
    box-sizing: border-box;
    display: block;
    min-height: 2rem;
  }
</style>