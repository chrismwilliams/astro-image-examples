/** @type {import("@types/prettier").Options} */
module.exports = {
	printWidth: 100,
	trailingComma: "all",
	semi: true,
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
