// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { site } from "./src/config/site.ts";
import { includeInSitemap } from "./src/config/sitemap.ts";

// https://astro.build/config
export default defineConfig({
	site: site.domain,
	i18n: {
		defaultLocale: "cs",
		locales: ["cs"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			filter: includeInSitemap,
			i18n: {
				defaultLocale: "cs",
				locales: {
					cs: "cs-CZ",
				},
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
