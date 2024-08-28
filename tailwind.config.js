/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#C6C2F2",
        obsidian: "#262628",
        cream: "#FFF6EE",
        lime: "#D6DC82",
        cherry: "#D86072",
      },
    },
  },
  plugins: [],
};
