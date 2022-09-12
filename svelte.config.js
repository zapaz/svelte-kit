import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';

const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
		// 	adapter: adapter({
		// 		pages: 'web',
		// 	assets: 'web',
		// 	fallback: 'index.html'
		// })
	}
};

export default config;
