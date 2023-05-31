<script>
    import Icon from '@iconify/svelte';
    import SocialMedia from '$lib/data/SocialMedia.js'

    export let size = 50;
</script>

<div class="flex mt-4">
    {#each SocialMedia as socialMediaWebsite}
        <a href="{socialMediaWebsite.href}" target="_blank" rel="noopener noreferrer" class="btn mr-2 transform transition-transform hover:scale-110"><Icon icon="{socialMediaWebsite.icon}" width="{size}" height="{size}"/></a>
    {/each}
</div>