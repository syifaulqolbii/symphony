/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      padding: "120px",
      center: true,
    },
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#fe7d32",
        putih: "#fafafa",
      },
      fontFamily: {
        heading: ["Armor Piercing", "sans-serif"],
        body: ["Prompt", "sans-serif"],
        logo: ["The Bold Font", "sans-serif"],
      },
    },
  },
  plugins: [],
};
