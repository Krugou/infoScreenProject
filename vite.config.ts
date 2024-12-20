import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// @ts-expect-error - Vite types are not up-to-date
	base: process.env.NODE_ENV === 'production' ? '/infoScreenProject/' : '/',
	define: {
		// Use ISO string format for better date parsing
		__BUILD_TIME__: JSON.stringify(new Date().toISOString())
	}
});
