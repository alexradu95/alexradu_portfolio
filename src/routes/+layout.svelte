<script>
    let innerWidth;
    import "../app.css";
    import { Svelvet } from 'svelvet';
</script>

<svelte:window bind:innerWidth/>

<Svelvet>
    {#if innerWidth <= 768}
        <div class="fullscreen dark flex justify-center items-center flex-col">
            <span class="font-bold leading-tight">
                access<br>on<br>a<br>computer<br>for<br>the<br>best<br>experience.
            </span>
        </div>
    {:else}
        <slot />
    {/if}
</Svelvet>
