// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		target: '#svelte'
// 	}
// };

// export default config;
import node from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: node()
	}
}