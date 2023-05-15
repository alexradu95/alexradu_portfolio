<script>
    import Navbar from '$lib/components/NavBar.svelte';
    import { page } from '$app/stores';
    import '../app.css';
</script>

<!-- Header -->
<Navbar segment={$page.url.pathname} />

<!-- Main -->
<slot />

<!-- Footer -->
<footer class="text-white text-base font-normal py-8 max-w-900 text-center w-full">
    <!-- add stuff to footer if needed -->
</footer>
