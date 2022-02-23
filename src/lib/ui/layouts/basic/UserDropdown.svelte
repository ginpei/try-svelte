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
    elButton.focus();
  };
</script>

<button bind:this={elButton} class="UserDropdown" on:click={onOpenClick}>
  {loginUser.email}
  ▼
</button>

{#if dropdownVisible}
  <Dropdown {elButton} onClose={onDropdownClose}>
    <div class="dropdown">
      <ul class="list">
        <li class="item">
          <a class="link" href="/profile">Profile</a>
        </li>
        <li class="item">
          <a class="link" href="/404">Settings</a>
        </li>
      </ul>
      <ul class="list">
        <li class="item">
          <a class="link" href="/logout">Logout...</a>
        </li>
      </ul>
    </div>
  </Dropdown>
{/if}

<style lang="scss">
  ul {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  button {
    all: initial;
    cursor: pointer;
    font: inherit;
  }

  .UserDropdown {
    color: white;
    height: 2rem;
    line-height: 2rem;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .dropdown {
    background-color: black;
    border: thin solid gray;
    box-shadow: 0 0 0.5rem #0006;
    color: white;
  }

  .list {
    & + & {
      border-top: thin solid gray;
    }
  }

  .item {
    display: grid;
  }

  .link {
    padding: 0.5rem 1rem;
  }
</style>
