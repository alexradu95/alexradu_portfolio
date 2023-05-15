<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
</script>

<svelte:head>
	<title>Alex Radu - Software Developer</title>
</svelte:head>
<main>

	<h1>Hi!✋ <br /> I'm Alex, a software engineer based in Romania 🌍</h1>
	<div class="icons">
		<a
			href="https://github.com/alexradu95/"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a
			href="https://www.linkedin.com/in/radualexandrucosmin/"
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaLinkedin />
			</div>
		</a>
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}

	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	
	.icon:hover {
		color: #ca3c25;
	}
</style>
