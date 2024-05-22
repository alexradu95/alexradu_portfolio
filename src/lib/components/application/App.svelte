<script>
    import { openedApps } from '$lib/data/Applications.js';
    import { scale, fade } from 'svelte/transition';
    import { draggable } from '@neodrag/svelte';

    export let title = "App";
    export let resizable = true;

    const closeApp = () => {
        $openedApps = $openedApps.filter((item) => item.id !== title);
    }
</script>


<div
    in:scale
    out:fade={{ duration: 400 }}
    use:draggable={{ handle: '.titlebar', bounds: 'parent', axis: 'both' }}
    class="absolute inset-1/4 overflow-auto shadow-lg rounded-lg bg-gray-800 text-white {resizable ? 'resize' : ''}"
    id="parent">
    
    <div class="flex flex-col h-full">
        <!-- Title bar -->
        <div class="titlebar bg-gray-800 m-1 p-2 cursor-grab flex items-center justify-between" use:draggable={{ handle: '.titlebar', bounds: 'parent', axis: 'both' }}>
            <span>{title}</span>
            <button class="p-0 transition-colors duration-500 hover:text-red-400" on:click={closeApp}>✕</button>
        </div>
        <!-- Window content -->
        <div class="m-1 p-2 rounded-lg flex-grow overflow-y-auto">
            <slot></slot>
        </div>
    </div>
</div>
