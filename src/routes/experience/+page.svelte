<script>
	import projects from '$lib/data/WorkExperience';
  </script>
  
  <svelte:head>
	<title>Alex Radu — Projects</title>
  </svelte:head>
  
  <div class="container mx-auto py-8">
	<div class="space-y-8">
	  <h1 class="text-3xl font-bold">Work Experience</h1>
	  {#each projects as project}
	  <div class="bg-gray-800 text-white p-6 rounded-lg">
		<div class="space-y-4">
		  <h2 class="text-xl">{project.title}</h2>
		  <div class="flex flex-wrap gap-2">
			<span class="text-gray-300">Technologies:</span>
			<div class="flex gap-2">
			  {#each project.technologies as tech}
			  <div class="bg-gray-600 py-1 px-2 rounded">{tech}</div>
			  {/each}
			</div>
		  </div>
		  <div class="flex flex-wrap gap-2">
			<span class="text-gray-300">Languages:</span>
			<div class="flex gap-2">
			  {#each project.languages as lang}
			  <div class="bg-gray-600 py-1 px-2 rounded">{lang}</div>
			  {/each}
			</div>
		  </div>
		  <ul class="list-disc list-inside">
			{#each project.description as line}
			<li>{line}</li>
			{/each}
		  </ul>
		  {#if project.url}
		  <a href={project.url} target="_blank" rel="noreferrer">
			<div class="flex items-center justify-center mt-4 text-white border-2 border-white rounded-md py-2 px-4">
			  Company website =>
			</div>
		  </a>
		  {/if}
		</div>
	  </div>
	  {/each}
	</div>
  </div>