<script>
    import { openedApps } from '$lib/data/Applications.js';
    import Panel from "$lib/components/panel/Panel.svelte";
    import { scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Experience from '../lib/apps/experience/ExperienceApp.svelte';

    onMount(async () => {
		$openedApps = [...$openedApps, {id: "Experience", app: Experience}];
	});
</script>

<div class="w-screen h-screen bg-gradient-to-b from-pink-500 to-cyan-500 relative" transition:scale={{ duration: 400 }}>
    <Panel />

    {#each $openedApps as openedApp}
        <svelte:component this={openedApp.app} />
    {/each}
</div>
