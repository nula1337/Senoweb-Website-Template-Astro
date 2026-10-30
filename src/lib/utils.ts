import { defaultLocale, type Locale } from "@/i18n/locales";

/** Entry id looks like `cs/dalsi-priklad` or `cs/gdpr` */
export function localeFromId(id: string): Locale {
	const [maybeLocale] = id.split("/");
	return (maybeLocale as Locale) ?? defaultLocale;
}

export function slugFromId(id: string): string {
	const parts = id.split("/");
	return parts.slice(1).join("/") || parts[0] || id;
}

export function formatPostDate(date: Date, locale: Locale = defaultLocale): string {
	return new Intl.DateTimeFormat(locale === "cs" ? "cs-CZ" : locale, {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(date);
}
