<script lang="ts">
</script>

<canvas class="EditorCanvas transparentBg" />

<style lang="scss">
  .EditorCanvas {
    box-shadow: 0 0 1rem #0003;
  }

  .transparentBg {
    --transparent-bg--color1: #fff;
    --transparent-bg--color2: #eee;
    --transparent-bg--size: 20px;

    background-color: var(--transparent-bg--color1);
    background-image: linear-gradient(
        45deg,
        var(--transparent-bg--color2) 25%,
        transparent 25%,
        transparent 75%,
        var(--transparent-bg--color2) 75%,
        var(--transparent-bg--color2)
      ),
      linear-gradient(
        45deg,
        var(--transparent-bg--color2) 25%,
        transparent 25%,
        transparent 75%,
        var(--transparent-bg--color2) 75%,
        var(--transparent-bg--color2)
      );
    background-position: 0 0,
      calc(var(--transparent-bg--size) / 2)
        calc(var(--transparent-bg--size) / 2);
    background-size: var(--transparent-bg--size) var(--transparent-bg--size);
  }
</style>
