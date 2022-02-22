<script lang="ts">
  export let active: boolean = false;
  export let href: string;
</script>

<a class:active class="BasicNavBarLink" {href} sveltekit:prefetch>
  <slot />
</a>

<style lang="scss">
  .BasicNavBarLink {
    box-sizing: border-box;
    color: white;
    display: grid;
    height: 2rem;
    line-height: 2rem;
    place-items: center;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      border-bottom: 4px solid #09f;
    }
  }
</style>
