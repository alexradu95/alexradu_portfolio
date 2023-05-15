<script>
    import { T, useFrame } from '@threlte/core'
    import { interactivity } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import { degToRad } from 'three/src/math/MathUtils'
    
    interactivity()
    const scale = spring(1)

    let rotation = 0

    useFrame((state, delta) => {
      rotation += delta
    })    
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

<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

  <!-- Cube -->
  <T.Group scale={$scale}>
    <T.Mesh position.y={0.5} castShadow let:ref scale={$scale}
    on:pointerenter={() => scale.set(1.5)}
    on:pointerleave={() => scale.set(1)}>
      <T.BoxGeometry />
      <T.MeshStandardMaterial color="#333333" />
    </T.Mesh>
    <!-- Floor -->
		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
			<T.CircleGeometry args={[3, 72]} />
			<T.MeshStandardMaterial color="white" />
		</T.Mesh>
  </T.Group>
  