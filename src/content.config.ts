import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { locales } from "./i18n/locales";

const localeEnum = z.enum(locales as unknown as [string, ...string[]]);

const formField = z.object({
	type: z.enum(["text", "tel", "email", "textarea"]),
	name: z.string(),
	autocomplete: z.string().optional(),
	required: z.boolean().optional(),
	placeholder: z.string().optional(),
	colSpan: z.number().optional(),
});

const pages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** URL path without leading slash, empty string for home */
		permalink: z.string(),
		locale: localeEnum.default("cs"),
		image: z.string().optional(),
		landing: z
			.object({
				heading: z.string(),
				breadcrumbs: z
					.array(
						z.object({
							title: z.string(),
							url: z.string().optional(),
						}),
					)
					.optional(),
			})
			.optional(),
		hero: z
			.object({
				topper: z.string().optional(),
				heading: z.string().optional(),
			})
			.optional(),
		form: z
			.object({
				name: z.string(),
				fields: z.array(formField),
				submit: z.string(),
			})
			.optional(),
		gdpr: z
			.object({
				topper: z.string(),
				heading: z.string(),
				items: z.array(
					z.object({
						heading: z.string().optional(),
						text: z.string(),
						subitems: z.array(z.object({ text: z.string() })).optional(),
					}),
				),
			})
			.optional(),
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		url: z.string(),
		description: z.string(),
		author: z.string(),
		date: z.coerce.date(),
		locale: localeEnum.default("cs"),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		tags: z.array(z.string()).default(["blog"]),
	}),
});

export const collections = { pages, blog };
