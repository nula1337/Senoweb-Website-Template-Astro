/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	printWidth: 120,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
