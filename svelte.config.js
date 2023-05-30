import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
	}
};