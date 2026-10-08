import { defaultLocale, type Locale } from "./locales";

const ui = {
	cs: {
		skip: {
			link: "Kliknutím přeskočíte na hlavní obsah",
		},
		nav: {
			homeAria: "Přejít na domovskou stránku",
			label: "Hlavní navigace",
			menu: "Menu",
			toggle: "Přepínač mobilní navigace",
			cta: "Kontakt",
		},
		theme: {
			toggle: "Přepínač tmavého režimu",
		},
		form: {
			gdpr: "Odesláním formuláře souhlasíte se",
			gdprLink: "zpracováním osobních údajů",
		},
		footer: {
			rights: "Všechna práva vyhrazena.",
		},
		thankyou: {
			back: "Zpět na náš web",
		},
	},
} as const;

type UiDictionary = (typeof ui)[typeof defaultLocale];
export type UiGroup = keyof UiDictionary;

export function t<G extends UiGroup, K extends keyof UiDictionary[G]>(
	locale: Locale | undefined,
	group: G,
	key: K,
): UiDictionary[G][K] {
	const lang = locale && locale in ui ? locale : defaultLocale;
	return ui[lang][group][key];
}
