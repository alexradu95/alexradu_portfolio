import { sveltekit } from '@sveltejs/kit/vite';

import { vitePreprocess } from '@sveltejs/kit/vite';

import path from 'path';



/** @type {import('vite').UserConfig} */

const config = {

	plugins: [sveltekit()],

	resolve: {

		alias: {

			'@': path.resolve(__dirname, './src'),

		},

	},

	build: {

		sourcemap: false, // Disable source maps globally, if acceptable.

	},

	optimizeDeps: {

		exclude: ['@mlc-ai/web-llm'], // Optionally exclude the problematic module from dependency scanning

	},

	esbuild: {

		logOverride: {

			'unsupported-source-map-comment': 'silent' // Suppress specific esbuild warnings

		}

	},

	server: {

		// You can add HMR or other server-specific configurations here

	}

};



export default config;