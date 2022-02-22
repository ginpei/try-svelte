<div class="Tile">
  <div class="content">
    <slot name="content" />
  </div>
  <div class="cover">
    <slot name="cover" />
  </div>
</div>

<style lang="scss">
  .Tile {
    box-sizing: border-box;
    height: 200px;
    position: relative;
    width: 200px;
  }

  .content,
  .cover {
    border-radius: 0.2rem;
    border-style: solid;
    border-width: thin;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  .content {
    border-color: gray;
    display: grid;
  }

  .cover {
    background-color: #f9f9f9cc;
    border-color: currentColor;
    color: #069;
    display: grid;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 200ms;

    :where(.Tile:hover, .Tile:focus-within) & {
      opacity: 1;
      transition: opacity 100ms;
    }
  }
</style>
