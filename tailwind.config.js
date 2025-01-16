/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Molle", "cursive"],
        heading: ["Playfair Display", "serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        darkElements: "#3E4E6C",
        lightBackground: "#FFFFFF",
        lightHeaderFooter: "#B1C8D3",
        darkText: "#FFFFFF",
        lightText: "#28344D",
      },
    },
  },
  plugins: [],
};
