<script>
  import { toDocTitle } from "../../lib/utils/page";
  import NoteListPage from "./_NoteListPage.svelte";
</script>

<svelte:head>
  <title>{toDocTitle("Note list")}</title>
</svelte:head>

<NoteListPage />
