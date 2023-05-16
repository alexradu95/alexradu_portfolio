<script>
	import { T, useFrame } from '@threlte/core'
	import { interactivity, Grid } from '@threlte/extras'
	import { tweened } from 'svelte/motion'
	import { elasticOut } from 'svelte/easing'
	interactivity()
	
	const scale = tweened(0.5, { duration: 1000, easing: elasticOut })
	
	let rotation = 0
	useFrame((state, delta) => {
	  rotation += delta / 3
	})
  </script>
  
  <T.PerspectiveCamera
	makeDefault
	position={[0, 5, 12]}
	fov={65}
	on:create={({ ref }) => {
	  ref.lookAt(0, 1, 0)
	}}
  />
  
  <T.Group rotation.y={rotation}>
	<T.DirectionalLight position={[3, 2, 1]} intensity={0.875}/>
  </T.Group>
  <T.HemisphereLight color="#00bfff" groundColor="orangered"/>
  
  <T.Mesh
	position.y={1}
	rotation.y={-rotation / 5}
	scale={$scale}
	on:pointerenter={() => scale.set(1)}
	on:pointerleave={() => scale.set(0.5)}
  >
	<T.SphereGeometry args={[1, 64, 64]}/>
	<T.MeshStandardMaterial 
	  color="#ccffff" 
	  metalness={0.2} 
	  roughness={0.1} 
	/>
  </T.Mesh>
  
  <T.Mesh scale={400}>
	<T.SphereGeometry />
	<T.MeshStandardMaterial side={1} color="#ddeeff" />
  </T.Mesh>
  