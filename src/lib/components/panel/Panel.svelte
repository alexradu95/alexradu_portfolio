<script>
    import { openedApps } from '../../data/Applications.js';
    import Launcher from '$lib/components/launcher/Launcher.svelte';
    import Icon from '@iconify/svelte';

    const check = (appName) => {
        return !$openedApps.some(app => app.id === appName);
    }

    const openApp = (App, Name) => {
        if ($openedApps.length === 0 || check(Name)) {
            $openedApps = [...$openedApps, { id: Name, app: App }];
        } else {
            $openedApps = $openedApps.filter((item) => item.id !== Name);
        }
    }
</script>

<div class="bg-gray-900 bg-opacity-25 w-screen fixed top-0 flex">
    <button class="mx-5 my-3 transition-transform duration-300 hover:scale-125" on:click={() => { openApp(Launcher, "Launcher") }}>
        <Icon icon="bi:circle" class="text-white" width="24" height="24" />
    </button>
</div>
