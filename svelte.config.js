import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
	}
};
