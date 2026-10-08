import { defaultLocale, type Locale } from "@/i18n/locales";

export type NavItem = {
	title: string;
	url: string;
	subitems?: NavItem[];
};

const navigation: Record<Locale, NavItem[]> = {
	cs: [
		{ title: "Domů", url: "/" },
		{ title: "O nás", url: "/o-nas/" },
		{
			title: "Služby",
			url: "/sluzby/",
			subitems: [
				{ title: "Tvorba webových stránek", url: "/sluzby/tvorba-webovych-stranek/" },
				{ title: "Webdesign", url: "/sluzby/webdesign/" },
			],
		},
		{ title: "Kontakt", url: "/kontakt/" },
	],
};

export function getNav(locale: Locale = defaultLocale): NavItem[] {
	return navigation[locale] ?? navigation[defaultLocale];
}
