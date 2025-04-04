import pluginJs from "@eslint/js";

/** @type { import('eslint').Linter.Config[]}*/
export default [
   pluginJs.configs.recommended,
   {
      languageOptions: {
         ecmaVersion: 2023,
         globals: globals.browser,
         parserOptions: {
            ecmaVersion: "latest",
            ecmaFeatures: { jsx: true },
            sourceType: "module",
         },
      },
      rules: {
         'no-console': 'warn',
         semi: ['error', 'always'],
      }
   }
]
