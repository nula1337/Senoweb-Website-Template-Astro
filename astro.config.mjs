// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

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
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Barlow",
			cssVariable: "--font-barlow",
			styles: ["normal"],
			// Regular / Medium / Bold (Figma) — static files; no VF via Fontsource API
			weights: [400, 500, 700],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
		},
		{
			provider: fontProviders.fontsource(),
			name: "Titillium Web",
			cssVariable: "--font-heading",
			styles: ["normal"],
			// Light + SemiBold (Figma)
			weights: [300, 600],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
		},
	],
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
