import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cssEntry = path.join(root, "src/styles/global.css");
const variantsRe = /[/\\]starwind[/\\].*variants\.ts$/;

/**
 * Tailwind v4 scans class strings in `variants.ts`, but Astro/Vite HMR often
 * updates the module without rebuilding CSS. Touching the CSS entry forces a rescan.
 */
export function tailwindVariantsHmr(): Plugin {
	return {
		name: "tailwind-variants-hmr",
		apply: "serve",
		handleHotUpdate({ file }) {
			if (!variantsRe.test(file)) return;
			const now = new Date();
			fs.utimesSync(cssEntry, now, now);
		},
	};
}
