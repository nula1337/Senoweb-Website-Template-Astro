import { getCollection, type CollectionEntry } from "astro:content";

import { defaultLocale, type Locale } from "@/i18n/locales";

export type PageEntry = CollectionEntry<"pages">;
export type BlogEntry = CollectionEntry<"blog">;

/** Entry id looks like `cs/domu` or `cs/o-nas` */
export function localeFromId(id: string): Locale {
	const [maybeLocale] = id.split("/");
	return (maybeLocale as Locale) ?? defaultLocale;
}

export function slugFromId(id: string): string {
	const parts = id.split("/");
	return parts.slice(1).join("/") || parts[0] || id;
}

export async function getPages(locale: Locale = defaultLocale): Promise<PageEntry[]> {
	const pages = await getCollection("pages");
	return pages.filter((page) => (page.data.locale ?? localeFromId(page.id)) === locale);
}

export async function getPageByPermalink(
	permalink: string,
	locale: Locale = defaultLocale,
): Promise<PageEntry | undefined> {
	const normalized = permalink.replace(/^\/+|\/+$/g, "");
	const pages = await getPages(locale);
	return pages.find((page) => page.data.permalink.replace(/^\/+|\/+$/g, "") === normalized);
}

export async function getBlogPosts(locale: Locale = defaultLocale): Promise<BlogEntry[]> {
	const posts = await getCollection("blog");
	return posts
		.filter((post) => (post.data.locale ?? localeFromId(post.id)) === locale)
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatPostDate(date: Date, locale: Locale = defaultLocale): string {
	return new Intl.DateTimeFormat(locale === "cs" ? "cs-CZ" : locale, {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(date);
}
