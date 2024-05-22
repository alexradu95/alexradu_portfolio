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

<style>
    .app-container {
        background-color: #1a202c;
        color: white;
        position: absolute;
        inset: 25%;
        overflow: auto;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
    }

    .titlebar {
        background-color: #1a202c;
        margin: 0.25rem;
        padding: 0.5rem;
        cursor: grab;
    }

    .close-button {
        padding: 0;
        transition: color 0.5s;
    }

    .close-button:hover {
        color: #f56565;
    }

    .content {
        margin: 0.25rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        flex-grow: 1;
        overflow-y: auto;
    }
</style>

<div
    in:scale
    out:fade={{ duration: 400 }}
    use:draggable={{ handle: '.titlebar' }}
    class="app-container {resizable ? "resize" : ""}"
    id="parent">
    
    <div class="flex flex-col h-full">
        <!-- Title bar -->
        <div class="titlebar flex items-center justify-between">
            <span>{title}</span>
            <button class="close-button" on:click={closeApp}>✕</button>
        </div>
        <!-- Window content -->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>
