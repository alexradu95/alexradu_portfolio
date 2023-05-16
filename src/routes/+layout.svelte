<script>
    import Navbar from '$lib/components/NavBar.svelte';
    import { page } from '$app/stores';
    import '../app.css';
</script>

<div class="flex flex-col min-h-screen max-w-screen-xl mx-auto">
    <header class="sticky top-0 z-10">
        <Navbar segment={$page.url.pathname} />
    </header>

    <main class="flex-grow overflow-y-auto bg-black text-white">
        <slot />
    </main>

    <!-- Footer -->
    <footer class="sticky bottom-0 bg-black text-white text-center py-4">
        <h1>This will be the footer</h1>
    </footer>
</div>


