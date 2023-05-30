<script>
    export let app;
    import { openedApps } from '../../data/Applications.js';

    export const check = (appName) => {
            for (let i=0; i<$openedApps.length; i++) {
                if ($openedApps[i].id === appName) {
                    return false;
                    }
                }
    }
    const closeLauncher = () => {
            $openedApps = $openedApps.filter((item) => item.id !== "Launcher");
    }

    const openApp = (App, Name) => {
        if ($openedApps.length === 0 || check(Name) !== false) {
            $openedApps = [...$openedApps, {id: Name, app: App}];
            closeLauncher()
        } else {
            console.log("already opened")
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="m-5 w-32 h-32 rounded-lg bg-gray-100 bg-opacity-10 flex flex-col items-center justify-center p-2 transition-transform hover:scale-125" on:click={() => openApp(app.component, app.id)}>
    <div class="text-white text-7xl">{app.icon}</div>
    <div class="pt-3 text-white text-2xl">{app.id}</div>
</div>




