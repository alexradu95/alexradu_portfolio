// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three']
	},
	preprocess: vitePreprocess()
};

export default config;
