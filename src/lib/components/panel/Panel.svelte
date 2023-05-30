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

<div class="bg-gray-900 bg-opacity-25 w-screen fixed top-0 flex">
    <button class="mx-3 mt-2 mb-3 transition-transform duration-300 hover:scale-150" on:click={() => { openApp(Launcher, "Launcher") }}>
        <span class="text-2xl">🏠</span>
    </button>
</div>
