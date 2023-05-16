<script>
    import Navbar from '$lib/components/NavBar.svelte';
    import { page } from '$app/stores';
    import '../app.css';
</script>

<!-- 
    Flexbox offers powerful features for building flexible and responsive layouts without relying heavily on manual 
    calculations or complex positioning techniques. It simplifies the process of creating both simple and complex designs, 
    adapting to different screen sizes and accommodating varying content sizes.
-->
<!-- 
    When you apply the .mx-auto class to an element, it sets the left and right margins to auto, which automatically distributes 
    the available horizontal space equally on both sides of the element. This results in the element being horizontally centered within 
    its parent container.
-->

<div class="flex flex-col min-h-screen mx-auto max-w-screen-lg">
    <header class="top-0">
        <Navbar segment="{$page.url.pathname}" />
    </header>

    <main class="flex flex-grow overflow-y-auto">
        <slot />
    </main>

    <!-- Footer -->
    <footer class="bottom-0">
       <h1>Footer</h1>
    </footer>
</div>
