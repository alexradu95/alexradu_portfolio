<script>
	import skills from '$lib/data/Skills';
</script>

<svelte:head>
	<title>Alex Radu — About</title>
</svelte:head>

<div class="container mx-auto py-8">
	<main class="max-w-full min-h-500px text-left">
		<h1 class="text-3xl font-bold mb-8">About</h1>
		<p class="mb-8">
			I'm a software engineer with a passion for innovation and expertise in software engineering and mixed reality development. My commitment to staying up to date with the latest trends and techniques allows me to bring cutting-edge ideas to life and drive the future of technology. 💻💡🚀
		</p>
		<h2 class="mt-8">Skills</h2>
		<ul>
		{#each Object.entries(skills) as [section, technologies]}
			
				<li>
					<h4 class="mb-2">
						{section}:
					</h4>
					<div class="flex flex-col gap-6">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
		{/each}
		</ul>
	</main>
</div>
