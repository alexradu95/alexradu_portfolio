<script>
    import IconsList from "$lib/components/IconsList.svelte";
    import { Canvas } from '@threlte/core'
	import DemoScene from "$lib/3d/DemoScene.svelte";
    import { T } from '@threlte/core'
</script>

<svelte:head>
    <title>Alex Radu - Software Developer</title>
</svelte:head>

<div class="flex flex-col py-10 text-white mx-auto space-y-8">

    <p class="text-center text-3xl md:text-4xl font-bold">Hi! ✋</p>
    <h1 class="text-center text-3xl md:text-4xl font-bold">I'm Alex, a software engineer based in Romania 🌍</h1>
    <div class="container p-10 ">
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
      </div>
      



    <h1 class="text-center text-3xl md:text-4xl font-bold">You can find me on the following websites</h1>
    <IconsList />
</div>
