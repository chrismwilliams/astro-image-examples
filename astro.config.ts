import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	site: "https://astro-image-examples.netlify.app/",
	integrations: [
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
});
