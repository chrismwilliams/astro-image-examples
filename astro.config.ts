import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
	site: "https://astro-image-examples.netlify.app/",
	integrations: [
		expressiveCode({
			themes: ["dracula-soft"],
		}),
	],
});
