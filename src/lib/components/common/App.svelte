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
    use:draggable={{ handle: '.titlebar' }}
    class="bg-gray-900 text-white absolute inset-1/4 {resizable ? "resize" : ""} overflow-auto shadow-md rounded-lg"
    id="parent">
    
    <div class="flex flex-col h-full">
        <!-- Title bar -->
        <div class="titlebar flex items-center justify-between bg-gray-900 m-1 p-2 cursor-grab">
            <span>{title}</span>
            <button class="p-0 transition-colors duration-500 hover:text-red-500" on:click={closeApp}>✕</button>
        </div>
        <!-- Window content -->
        <div class="m-1 p-2 rounded-lg flex-grow overflow-y-auto">
            <slot></slot>
        </div>
    </div>

</div>
