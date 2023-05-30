<script>
    import { fade } from 'svelte/transition';
    import { openedApps, availableApps } from '$lib/data/Applications.js';
  
    export const check = (appName) => {
      for (let i = 0; i < $openedApps.length; i++) {
        if ($openedApps[i].id === appName) {
          return false;
        }
      }
    };
  
    const openApp = (App, Name) => {
      console.log('test');
      if ($openedApps.length === 0 || check(Name) !== false) {
        $openedApps = [...$openedApps, { id: Name, app: App }];
        closeLauncher();
      } else {
        console.log('already opened');
      }
    };
  
    const closeLauncher = () => {
      $openedApps = $openedApps.filter((item) => item.id !== 'Launcher');
    };
  </script>
  

  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-80"
    transition:fade
    on:click|capture|self={closeLauncher}
  >
    <div class="relative flex flex-col gap-4">
      <div class="grid grid-cols-4 grid-rows-6 gap-2 apps-container">
        {#each $availableApps as app}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="m-5 w-32 h-32 rounded-lg bg-gray-100 bg-opacity-10 flex flex-col items-center justify-center p-2 transition-transform hover:scale-125"
          on:click={() => openApp(app.component, app.id)}
        >
          <div class="text-white text-7xl">{app.icon}</div>
          <div class="pt-3 text-white text-2xl">{app.id}</div>
        </div>
        {/each}
      </div>
    </div>
  </div>
  