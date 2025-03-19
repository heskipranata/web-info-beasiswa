/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    { pattern: /.*/ }, // Memastikan semua class masuk
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

