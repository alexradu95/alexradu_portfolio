<script>
    import { Canvas } from '@threlte/core'
</script>
  
<div class="container">
  <Canvas>
    <slot />
  </Canvas>
</div>


  
  <style>
    .container {
        width: 900px;
        height: 900px;
        padding: 0;
        display: flex;
        justify-content: center;
	  } 
  </style>