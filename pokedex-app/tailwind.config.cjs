/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge : ['./src/**/*.svelte'],
  content:[
    './src/**/*.{svelte, html, js, ts}'
  ],
  darkMode: false,
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
