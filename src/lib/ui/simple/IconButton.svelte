<script lang="ts">
</script>

<button class="IconButton">
  <slot />
</button>

<style lang="scss">
  .IconButton {
    background-color: #f9f9f9;
    border-radius: 4px;
    border: thin solid lightgray;
    display: grid;
    height: 2em;
    place-items: center;
    width: 2em;

    &:hover,
    &:focus {
      border-color: gray;
    }

    &:active {
      background-color: #eee;
    }
  }
</style>
