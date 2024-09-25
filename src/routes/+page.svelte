<script>
    import { openedApps } from '$lib/data/Applications.js';
    import { scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Panel from "../lib/components/layout/Panel.svelte";

    onMount(async () => {
		$openedApps = [...$openedApps];
	});
</script>

<div class="w-screen h-screen bg-gradient-to-b from-pink-500 to-cyan-500 relative" transition:scale={{ duration: 400 }}>
    <Panel />

    {#each $openedApps as openedApp}
        <svelte:component this={openedApp.app} />
    {/each}
</div>
