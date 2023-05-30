<script>
    import { fade } from 'svelte/transition';
    import { openedApps, availableApps } from "$lib/data/Applications.js";
    import LauncherItem from './LauncherItem.svelte';

    const closeLauncher = () => {
        $openedApps = $openedApps.filter((item) => item.id !== "Launcher");
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-80"
    transition:fade
    on:click|capture|self={closeLauncher}>
    <div class="relative flex flex-col gap-4">
        <div class="grid grid-cols-4 grid-rows-6 gap-2">
            {#each $availableApps as app}
                <LauncherItem {app}/>
            {/each}
        </div>
    </div>
</div>