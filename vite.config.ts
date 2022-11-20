import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { ViteRsw } from 'vite-plugin-rsw';

const config: UserConfig = {
	plugins: [sveltekit(), ViteRsw()],
	server: {
		fs: {
			allow: ["./my-wasm-crate"]
		}
	}
};

export default config;
