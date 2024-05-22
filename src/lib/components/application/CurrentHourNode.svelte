<script>
    import { onMount } from 'svelte';

    let currentHour = '';

    onMount(() => {
        const date = new Date();
        currentHour = date.getHours() + ':' + date.getMinutes();
    });
</script>

<div style="background-color: #444; color: white; padding: 10px; border-radius: 5px;">
    Current Hour: {currentHour}
</div>
