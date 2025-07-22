import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{ files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },

	{
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
      "no-console": "off",
      "class-methods-use-this": "off",
      "import/first":"off",
      "no-param-reassign": "off"
		},
	},
]);

