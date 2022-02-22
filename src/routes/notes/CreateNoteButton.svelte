<script lang="ts">
  function onClick() {
    console.log(`# click`);
  }
</script>

<div class="CreateNoteButton" on:click={onClick}>
  <div class="content">+</div>
  <button class="cover">Create</button>
</div>

<style lang="scss">
  .CreateNoteButton {
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
    place-items: center;
  }

  .cover {
    background-color: #f9f9f9cc;
    border-color: currentColor;
    color: #069;
    cursor: pointer;
    font-size: 3rem;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 200ms;

    .CreateNoteButton:hover & {
      opacity: 1;
      transition: opacity 100ms;
    }
  }
</style>
