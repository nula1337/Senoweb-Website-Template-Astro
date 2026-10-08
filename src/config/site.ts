import { defaultLocale } from "../i18n/locales";

export const site = {
	name: "Senoweb",
	email: "info@senoweb.cz",
	ico: "19538685",
	phoneForTel: "+420731736631",
	phoneFormatted: "+420 731 736 631",
	address: {
		lineOne: "Třebovská 123",
		city: "Ústí nad Orlicí",
		zip: "56203",
		mapLink: "https://maps.app.goo.gl/GQmwqUWKd6JMZi8Y7",
	},
	socials: {
		facebook: "https://www.facebook.com/",
		instagram: "https://www.instagram.com/",
		youtube: "https://www.youtube.com/",
		tiktok: "https://www.tiktok.com/",
		whatsapp: "https://wa.me/",
	},
	/** Include protocol, no trailing slash */
	domain: "https://www.senoweb.cz",
	defaultLocale,
} as const;

export type Site = typeof site;
