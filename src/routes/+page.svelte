<script>
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>
  
<svelte:head>
    <title>Alex Radu - Software Developer</title>
</svelte:head>
  
<div class="mt-8 pt-10">
    <h1 class="text-center text-3xl md:text-4xl font-bold mb-8">Hi!✋ <br /> I'm Alex, a software engineer based in Romania 🌍</h1>
    <h1 class="text-center text-3xl md:text-4xl font-bold mb-8">You can find me on the following websites</h1>
   
    <div class="flex justify-center items-center mt-8 space-x-10">
        <a
            href="https://github.com/alexradu95/"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-link hover:text-blue-500"
        >
            <div class="icon w-24 h-24">
                <FaGithub class="text-white" />
            </div>
        </a>
        <a
            href="https://www.linkedin.com/in/radualexandrucosmin/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-link hover:text-blue-500"
        >
            <div class="icon w-24 h-24">
                <FaLinkedin class="text-white" />
            </div>
        </a>
    </div>
</div>
