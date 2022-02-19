<script lang="ts">
  import { toError } from "$lib/utils/errors";

  export let error: unknown;

  const message = toError(error).message;
</script>

<div class="ErrorBox">
  <span class="heading">Error:</span>
  {message}
</div>

<style>
  .ErrorBox {
    border: solid 2px tomato;
    color: darkred;
    padding: 1rem;
  }
</style>