<script>
  import { onMount } from "svelte";
  import { Engine3D } from "@orillusion/core";
  import App from "$lib/components/application/App.svelte";

  let canvas;

  onMount(async () => {
    // await Engine3D.init({
    //   canvasConfig: { canvas },
    // });
    });
</script>

<App title="Orillusion">
  <div>
    <canvas bind:this={canvas} id="canvas" width="640" height="480" />
  </div>
</App>
