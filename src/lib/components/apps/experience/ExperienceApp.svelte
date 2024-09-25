<script>
    import Icon from '@iconify/svelte';
    import projects from '$lib/data/WorkExperience';
    import App from "$lib/components/common/App.svelte";
    import ExperienceItem from './ExperienceItem.svelte';

    let current = 0;
</script>

<App title="Experience" resizable={false}>
    <div class="flex h-auto">
        <div class="bg-gray-800 text-white p-4 rounded-lg z-10 mr-3 overflow-visible sticky top-0">
            {#each projects as project, index}
                <div class="flex items-center justify-center h-12 w-12 cursor-pointer relative group my-2" on:click={() => current = index}>
                    <Icon icon="{project.icon}" class="h-10 w-10 relative z-0" />
                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-1">
                        <p class="font-bold text-shadow">{project.companyName}</p>
                    </div>
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
