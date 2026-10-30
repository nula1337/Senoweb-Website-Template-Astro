import { getCollection, getEntry, type CollectionEntry } from "astro:content";

import type { Locale } from "@/i18n/locales";

export type BlogEntry = CollectionEntry<"blog">;
export type PageEntry = CollectionEntry<"pages">;

export async function getPage(locale: Locale, slug: string): Promise<PageEntry | undefined> {
	return getEntry("pages", `${locale}/${slug}`);
}

export async function getBlogPosts(): Promise<BlogEntry[]> {
	const posts = await getCollection("blog");
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
