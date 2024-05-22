import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

export default {
	preprocess: sveltePreprocess({
		typescript: true,
	}),
	kit: {
		adapter: adapter(),
	},
};