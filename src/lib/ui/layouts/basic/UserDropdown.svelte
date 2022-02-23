<script lang="ts">
  import type { User } from "../../../data/User";
  import Dropdown from "../../complex/dropdown/Dropdown.svelte";
  import type { OnPopupClose } from "../../complex/popup/popupMeta";

  export let loginUser: User;

  let elButton: HTMLButtonElement;
  let dropdownVisible = false;

  function onOpenClick() {
    dropdownVisible = true;
  }

  const onDropdownClose: OnPopupClose = () => {
    dropdownVisible = false;
  };
</script>

<button bind:this={elButton} class="UserDropdown" on:click={onOpenClick}>
  {loginUser.email}
  ▼
</button>

{#if dropdownVisible}
  <Dropdown {elButton} onClose={onDropdownClose}>
    <div class="dropdown">Yo</div>
  </Dropdown>
{/if}

<style>
  button {
    all: initial;
    cursor: pointer;
    font: inherit;
  }

  .UserDropdown {
    color: white;
    height: 2rem;
    line-height: 2rem;
  }

  .dropdown {
    border: thin solid tomato;
    padding: 1rem;
  }
</style>
