<script>
	import DemoScene from "$lib/3d/DemoScene.svelte";
    import { useThrelte } from '@threlte/core'

	const { scene, renderer, camera } = useThrelte()

	if (navigator !== undefined) {
		console.log("Navigator is defined")
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


<DemoScene></DemoScene>