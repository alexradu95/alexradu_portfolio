<script>
    import { Canvas } from '@threlte/core'
    import DemoScene from "$lib/3d/DemoScene.svelte";
    import { T } from '@threlte/core'
</script>


<Canvas>
    <T.PerspectiveCamera
    makeDefault
    position={[5, 5, 5]}
    on:create={({ ref, cleanup }) => {
      ref.lookAt(0, -1, 0)
  
      // provide a cleanup function that is called
      // when the component is destroyed or `ref`
      // changes because different `args` are passed.
      cleanup(() => {
        console.log('cleanup')
      })
    }}
  />
    <DemoScene></DemoScene>
</Canvas>