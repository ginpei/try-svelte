<script lang="ts">
  import type { Note } from "src/lib/data/Note";
  import type { User } from "../../../data/User";
  import { toDocTitle } from "../../../utils/page";
  import "../common/global.css";
  import EditorCanvasArea from "./EditorCanvasArea.svelte";
  import EditorNavBar from "./EditorNavBar.svelte";
  import EditorOptionBar from "./EditorOptionBar.svelte";
  import EditorPropertyPanel from "./EditorPropertyPanel.svelte";
  import EditorToolBar from "./EditorToolBar.svelte";

  export let loginUser: User;

  const note: Note = {
    createdAt: Date.now(),
    id: "0",
    name: "My note",
    thumbnail: "",
  };
</script>

<svelte:head>
  <title>{toDocTitle(note.name)}</title>
</svelte:head>

<div class="EditorLayout">
  <div class="pane" style="grid-area: navBar">
    <EditorNavBar {loginUser} />
  </div>
  <div class="pane" style="grid-area: optionBar">
    <EditorOptionBar />
  </div>
  <div class="pane" style="grid-area: toolBar">
    <EditorToolBar />
  </div>
  <div class="pane" style="grid-area: panels">
    <EditorPropertyPanel />
  </div>
  <div class="pane" style="grid-area: canvas">
    <EditorCanvasArea />
  </div>
</div>

<style lang="scss">
  .EditorLayout {
    background-color: lightgray;
    display: grid;
    gap: 1px;
    grid-template:
      "navBar    navBar    navBar   " 2rem
      "optionBar optionBar optionBar" 2rem
      "toolBar   canvas    panels   " auto
      / 10rem auto 20rem;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  }

  .pane {
    display: grid;
  }
</style>
