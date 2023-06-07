<script>
	import App from '../../components/application/App.svelte';
  import { onMount, onDestroy } from "svelte";
  import {
    Color,
    Engine3D,
    Scene3D,
    Object3D,
    Camera3D,
    View3D,
    LitMaterial,
    BoxGeometry,
    MeshRenderer,
    DirectLight,
    HoverCameraController,
    AtmosphericComponent,
  } from "@orillusion/core";


  let canvas;
  let view;

  // Initialize the engine, scene and objects when the component mounts
  onMount(async () => {
    // Initialize the engine
    await Engine3D.init({
      canvasConfig: { canvas },
    });

    // Create a new scene root-node
    let scene3D = new Scene3D();

    // Add skybox
    let sky = scene3D.addComponent(AtmosphericComponent);

    // Create a camera object
    let cameraObj = new Object3D();
    let camera = cameraObj.addComponent(Camera3D);
    camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
    let controller = camera.object3D.addComponent(HoverCameraController);
    controller.setCamera(0, 0, 15);
    scene3D.addChild(cameraObj);

    // Create a light object
    let light = new Object3D();
    let component = light.addComponent(DirectLight);
    light.rotationX = 45;
    light.rotationY = 30;
    component.intensity = 2;
    scene3D.addChild(light);

    // Create a new object and add MeshRenderer
    const obj = new Object3D();
    let mr = obj.addComponent(MeshRenderer);
    mr.geometry = new BoxGeometry(5, 5, 5);
    mr.material = new LitMaterial();
    scene3D.addChild(obj);

    // Render scene
    view = new View3D();
    view.scene = scene3D;
    view.camera = camera;
    Engine3D.startRenderView(view);
  });

  // Clean up when the component unmounts
  onDestroy(() => {
    if (view) {
      Engine3D.stopRenderView(view);
      view.dispose();
    }
  });
  let current = 0;
</script>


<App title="Orillusion" resizable={false}>

  <div class="flex h-auto">
      <!-- <div class="bg-gray-800 text-white p-4 rounded-lg z-10 mr-3 overflow-visible sticky top-0">
           {#each projects as project, index}
              <div class="flex items-center justify-center h-12 w-12 cursor-pointer relative group my-2" on:click={() => current = index}>
                  <Icon icon="{project.icon}" class="h-10 w-10 relative z-0" />
                  <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-1">
                      <p class="font-bold text-shadow">{project.companyName}</p>
                  </div>
              </div>
          {/each} 
      </div> -->
      <div class="flex-1 relative">
          <!-- {#if projects[current]}
              <ExperienceItem project={projects[current]} />
          {/if} -->
          <canvas bind:this={canvas} id="canvas" width="640" height="480" ></canvas>
      </div>
  </div>
</App>
