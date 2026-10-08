/**
 * Path segments/prefixes excluded from `@astrojs/sitemap`.
 * Matched with `URL.includes(...)` — e.g. `"/gdpr"` also covers `/gdpr/`.
 */
export const sitemapExcludePaths = ["/admin", "/dekujeme", "/gdpr"] as const;

export function includeInSitemap(pageUrl: string): boolean {
	return !sitemapExcludePaths.some((path) => pageUrl.includes(path));
}
