<script>
    import Navbar from '$lib/components/NavBar.svelte';
    import { page } from '$app/stores';
    import '../app.css';
</script>

<div class="flex flex-col min-h-screen max-w-screen-lg mx-auto">
    <header class="sticky top-0 z-10">
        <Navbar segment="{$page.url.pathname}" />
    </header>

    <main class="flex flex-grow overflow-y-auto text-white justify-center items-center">
        <slot />
    </main>

    <!-- Footer -->
    <footer class="sticky bottom-0 text-white text-center py-4">

    </footer>
</div>
