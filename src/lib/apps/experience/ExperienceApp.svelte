<script>
    import projects from '$lib/data/WorkExperience';
    import App from "$lib/components/application/App.svelte";
    import ExperienceItem from './ExperienceItem.svelte';

    let current = 0;
</script>

<App title="Experience" width="4/6" height="4/6">
    <div class="grid grid-cols-3 overflow-x-scroll snap-x-mandatory h-auto">
        <div class="col-span-1 bg-gray-800 text-white p-6 rounded-lg">
            {#each projects as project, index}
                <div class="flex items-center gap-2 cursor-pointer" on:click={() => current = index}>
                    🧿
                </div>
            {/each}
        </div>
        <div class="col-span-2">
            {#if projects[current]}
                <ExperienceItem project={projects[current]} />
            {/if}
        </div>
    </div>
</App>
