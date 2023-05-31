<script>
    import App from "$lib/components/application/App.svelte";
    import SocialMediaButtons from "../components/widgets/SocialMediaButtons.svelte";
</script>

<App title="Welcome">
    <div class="modal">
        <h1 class="text-2xl font-bold mb-2">I'm Alex, a software engineer based in Romania 🌍</h1>
        <p class="text-lg">
            This website is an OS-like interface built in Svelte. It serves as my personal website where I showcase my work experience, software development projects, and potentially a small blog in the future.
        </p>
        <h3 class="text-xl font-bold mt-4">How It Works:</h3>
        <ol class="list-decimal pl-6 mt-2">
            <li>It mimics an OS user interface, providing a familiar experience.</li>
            <li>The toolbar at the top of the page resembles the one in MacOS.</li>
            <li>Clicking on the app launcher icon in the toolbar opens the application launcher.</li>
        </ol>

        <h3 class="text-xl font-bold mt-4">You can find me on the following websites:</h3>
        <SocialMediaButtons size=40></SocialMediaButtons>

    </div>
</App>
