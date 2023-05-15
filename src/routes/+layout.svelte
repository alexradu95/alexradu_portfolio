<script>
	import Navbar from '$lib/components/NavBar.svelte';
	import { page } from '$app/stores';
</script>

<!-- Header -->
<Navbar segment={$page.url.pathname} />

<!-- Main -->
<slot />

<!-- Footer -->
<footer>
	<!-- add stuff to footer if needed -->
</footer>

<style>
	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	:global(html),
	:global(body) {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: #0b0600;
	}

	:global(body) {
		background-color: var(--background);
		background-size: 200% 200%;
		color: white;
		margin: 0;
		box-sizing: border-box;
		display: grid;
		line-height: 1.75;
		place-items: center;
		height: 100%;
		overflow-x: hidden;
	}


	:global(::selection) {
		color: white;
		background: #ca3c25;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #fafffd;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}

	@media (min-width: 900px) {
		:global(body) {
			padding: 0 100px;
		}
	}

	footer {
		font-size: 16px;
		font-weight: 400;
		padding: 30px 0;
		max-width: 900px;
		text-align: center;
		width: 100%;
	}

	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}
	}
</style>
