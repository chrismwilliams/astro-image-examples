/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: true,
  plugins: [require.resolve("prettier-plugin-astro")],
  pluginSearchDirs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
