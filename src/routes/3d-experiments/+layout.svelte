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
        background-color: rgb(43, 43, 43);
        width: 900px;
        height: 900px;
        padding: 10px;
        display: flex;
        justify-content: center;
	  } 
  </style>