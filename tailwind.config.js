/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Gold
        secondary: "#1E90FF", // Dodger Blue
        accent: "#A52A2A", // Brown
        background: "#FFF8DC", // Cornsilk
      },
    },
  },
  plugins: [],
};
