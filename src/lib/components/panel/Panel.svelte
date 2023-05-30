<script>
    import { openedApps } from '../../data/Applications.js';
    import Launcher from '$lib/components/launcher/Launcher.svelte';

    const check = (appName) => {
        for (let i = 0; i < $openedApps.length; i++) {
            if ($openedApps[i].id === appName) {
                return false;
            }
        }
    }

    const openApp = (App, Name) => {
        if ($openedApps.length === 0 || check(Name) !== false) {
            $openedApps = [...$openedApps, { id: Name, app: App }];
        } else {
            $openedApps = $openedApps.filter((item) => item.id !== Name);
        }
    }
</script>

<div class="bg-gray-900 bg-opacity-25 h-12 w-screen fixed top-0 flex items-center justify-between backdrop-filter backdrop-blur-md text-white">
    <div class="flex items-center justify-between">
        <button class="w-8 h-8 m-3 rounded-lg transition-transform duration-300 hover:scale-150" on:click={() => { openApp(Launcher, "Launcher") }}>
            🪟
        </button>
    </div>
</div>
