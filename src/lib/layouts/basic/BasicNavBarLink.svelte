<script lang="ts">
  export let active: boolean = false;
  export let href: string;
</script>

<a class:active class="BasicNavBarLink" {href} sveltekit:prefetch>
  <slot />
</a>

<style lang="scss">
  .BasicNavBarLink {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
