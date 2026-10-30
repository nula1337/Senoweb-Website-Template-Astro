import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heading: z.string(),
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: "**/index.md", base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			url: z.string(),
			description: z.string(),
			author: z.string(),
			date: z.coerce.date(),
			image: z.object({
				url: image(),
				alt: z.string(),
			}),
		}),
});

export const collections = { pages, blog };
