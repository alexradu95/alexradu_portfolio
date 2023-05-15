<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>
  
  <svelte:head>
	<title>Alex Radu - Software Developer</title>
  </svelte:head>
  
  <main class="flex flex-col items-center justify-center">
	<div>
	  <h1 class="text-center">Hi!✋ <br /> I'm Alex, a software engineer based in Romania 🌍</h1>
	  <h1 class="text-center">The styling is broken right now, I'm trying to implement Tailwind.css</h1>
	   
	  <div class="flex justify-center items-center mt-8">
		<a
		  href="https://github.com/alexradu95/"
		  aria-label="GitHub"
		  target="_blank"
		  rel="noopener noreferrer"
		  class="icon-link"
		>
		  <div class="icon">
			<FaGithub class="text-white" />
		  </div>
		</a>
		<a
		  href="https://www.linkedin.com/in/radualexandrucosmin/"
		  aria-label="LinkedIn"
		  target="_blank"
		  rel="noopener noreferrer"
		  class="icon-link"
		>
		  <div class="icon">
			<FaLinkedin class="text-white" />
		  </div>
		</a>
	  </div>
	</div>
  </main>
  