<script>
  import { fade } from 'svelte/transition';
  import { openedApps, availableApps } from '$lib/data/Applications.js';
  

  const check = (appName) => {
    for (let i = 0; i < $openedApps.length; i++) {
      if ($openedApps[i].id === appName) {
        return false;
      }
    }
  };

  const openApp = (App, Name) => {
    if ($openedApps.length === 0 || check(Name) !== false) {
      $openedApps = [...$openedApps, { id: Name, app: App }];
      closeLauncher();
    }
  };

  const closeLauncher = () => {
    $openedApps = $openedApps.filter((item) => item.id !== 'Launcher');
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="fixed inset-0 flex flex-col justify-start items-center bg-gray-900 bg-opacity-80"
  transition:fade
  on:click|capture|self={closeLauncher}
>
  <div class="relative mt-1/4 self-center">
      <div class="grid grid-cols-4 gap-2 mt-32">
          {#each $availableApps as app}
          <div
              class="w-32 h-32 m-5 rounded-lg bg-gray-100 bg-opacity-10 flex flex-col items-center justify-center transition-transform hover:scale-110"
              on:click={() => openApp(app.component, app.id)}
          >
              <div class="text-white text-7xl">{app.icon}</div>
              <div class="pt-3 text-white text-2xl">{app.id}</div>
          </div>
          {/each}
      </div>
  </div>
</div>





  