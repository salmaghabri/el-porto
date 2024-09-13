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
      fontFamily: {
        Caprasimo: ["Caprasimo", "Arial", "sans-serif"],
        Cinzel: ["Cinzel Decorative", "Arial", "sans-serif"],
        Vioda: ["Viaoda Libre", "Arial", "sans-serif"],
        serif: ["Open Sans", "Georgia", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        textBlobGreen: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        textBlobRose: {
          "0%, 100%": { backgroundPosition: "100% 50%" },
          "50%": { backgroundPosition: "0% 50%" },
        },
        textBlobMauve: {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        blobGreen: "textBlobGreen 8s infinite ease",
        blobRose: "textBlobRose 8s infinite linear",
        blobMauve: "textBlobMauve 12s infinite ease-in-out",
      },

      backgroundClip: {
        text: "text",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
