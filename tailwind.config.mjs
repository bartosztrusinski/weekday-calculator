/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        /* made at https://learnui.design/tools/gradient-generator.html */
        gradient:
          'linear-gradient(90deg, #003f5b, #2b4b7d, #5f5195, #98509d, #cc4c91, #f25375, #ff6f4e, #ff9913); ',
      },
    },
  },
  plugins: [],
};
