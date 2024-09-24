<script>
    import { onMount } from 'svelte';
    import App from "$lib/components/common/App.svelte";

    let groupedCommits = {};

    onMount(async () => {
        const response = await fetch('https://api.github.com/repos/alexradu95/alexradu_portfolio/commits?per_page=30');
        const commits = await response.json();
        
        commits.forEach(commit => {
            const date = new Date(commit.commit.committer.date).toLocaleDateString();
            if (groupedCommits[date]) {
                groupedCommits[date].push(commit);
            } else {
                groupedCommits[date] = [commit];
            }
        });
    });
</script>

<App title="ChangeLog">
    <div class="modal">
        {#each Object.keys(groupedCommits) as date}
            <div class="p-4 rounded-lg shadow-md bg-gray-800 text-white my-2">
                <div class="font-bold text-blue-400 mb-2">📅 {date}</div>
                {#each groupedCommits[date] as commit}
                    <div class="text-gray-300 mb-2">
                        💬 {commit.commit.message}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</App>
