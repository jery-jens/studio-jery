/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "black": "#090909",
      "white": "#FFFFFF",
      "grey-800": "#1E1E1E",
      "grey-700": "#9E9E9E",
      "grey-600": "#C7C7C7",
    },
    fontFamily: {
      "primary": ["Overused Grotesk", "sans-serif"]
    },
    backgroundImage: {
      "white-gradient": "linear-gradient(242deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)",
      "black-gradient": "linear-gradient(251deg, #090909 0%, rgba(25.49, 25.49, 25.49, 0) 100%)",
      "black-mobile-gradient": "linear-gradient(67deg, #090909 0%, rgba(25.49, 25.49, 25.49, 0) 100%)"
    },
    extend: {
    },
  },
  plugins: [],
}