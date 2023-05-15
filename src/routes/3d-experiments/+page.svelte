<script>
	import DemoScene from "$lib/3d/DemoScene.svelte";
    import { useThrelte } from '@threlte/core'
	import { T } from '@threlte/core'
	import { get } from 'svelte/store'

	const { scene, renderer, camera } = useThrelte()

	if (navigator !== undefined) {
		console.log("Navigator is defined")
		// See discussion here: https://github.com/threlte/threlte/discussions/59
		import('three/examples/jsm/webxr/VRButton').then(module => {
			const { VRButton } = module;
			if(renderer) {
				renderer.xr.enabled = true;
				document.body.appendChild(VRButton.createButton(renderer));
				renderer.setAnimationLoop(() => renderer.render(scene, get(camera)))
			}
		});
    } else {
		console.log("Navigator is not defined");
	}
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref, cleanup }) => {
    ref.lookAt(0, 1, 0)

    // provide a cleanup function that is called
    // when the component is destroyed or `ref`
    // changes because different `args` are passed.
    cleanup(() => {
      console.log('cleanup')
    })
  }}
/>

<DemoScene></DemoScene>