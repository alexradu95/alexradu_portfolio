<script>
    import projects from '$lib/data/WorkExperience';
    import App from "$lib/components/application/App.svelte";
    import ExperienceItem from './ExperienceItem.svelte';

    let current = 0;
</script>

<App title="Experience" resizable={false}>
    <div class="flex h-auto">
        <div class="bg-gray-800 text-white p-6 rounded-lg z-10 mr-3 overflow-y-auto max-h-full sticky top-0">
            {#each projects as project, index}
                <div class="flex items-center justify-center h-[48px] w-[48px] cursor-pointer" on:click={() => current = index}>
                    🧿
                </div>
            {/each}
        </div>
        <div class="flex-1 relative">
            {#if projects[current]}
                <ExperienceItem project={projects[current]} />
            {/if}
        </div>
    </div>
</App>
