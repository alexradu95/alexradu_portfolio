<script>
	import { onMount } from 'svelte';
	import App from "$lib/components/application/App.svelte";

	let link = 'https://alexradu95.github.io/GDPlayground/';
  
	onMount(() => {
	  const newTab = window.open(link, '_blank');
	  newTab.opener = null;
	  window.close();
	});
  </script>
  
  <App title="Godot" width=1 height=1>
	<div class="flex items-center justify-center flex-col">
	  <p>Redirected to Godot Playground...</p>
	</div>
  </App>
  