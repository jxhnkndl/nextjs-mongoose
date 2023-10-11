/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark': '#021526',
      'light': '#eef3f7',
      'navy': '#023059',
      'sky': '#048ABF',
      'royal': '#0477BF',
      'aqua': '#7EDDF2'
    },
    plugins: [],
  },
};
