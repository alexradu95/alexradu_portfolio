<script>
    import socialMedia from "$lib/data/SocialMedia";
</script>

<div class="flex justify-center items-center mt-8 space-x-10">
    {#each socialMedia as media}
        <a
            href={media.href}
            aria-label={media.label}
            target="_blank"
            rel="noopener noreferrer"
            class="icon-link hover:text-blue-500"
        >
            <div class="icon w-24 h-24">
                <svelte:component this={media.icon} class="text-white" />
            </div>
        </a>
    {/each}
</div>
