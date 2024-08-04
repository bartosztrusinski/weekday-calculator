/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  experimentalTernaries: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
