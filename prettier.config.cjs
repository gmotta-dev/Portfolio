/** @typedef  {import("prettier").Config} PrettierConfig */
/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  printWidth: 200,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  importOrderTypeScriptVersion: "4.4.0",
  plugins: ["prettier-plugin-tailwindcss"],
  importOrder: ["^(react/(.)$)|^(react$)", "", "^(next/(.)$)|^(next$)", "<THIRD_PARTY_MODULES>", "", "^@/(.)$", "", "^/(.)$", "", "^~/(.)$", "^[./]"],
  proseWrap: "always",
  "--experimental-ternaries": true,
};

module.exports = config;
