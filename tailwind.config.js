const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "1166px",
      },
    },
    extend: {
      screens: {
        sm: "426px",
        "32md": "960px",
        "32lg": "1230px",
      },
      keyframes: {
        slideInRight: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        slideOutRight: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        modalIn: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        modalOut: {
          from: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
          to: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.95)",
          },
        },
      },
      animation: {
        slideInRight: "slideInRight 400ms ease-in-out",
        slideOutRight: "slideOutRight 400ms ease-in-out",
        fadeIn: "fadeIn 400ms ease-out",
        fadeOut: "fadeOut 400ms ease-in",
        modalIn: "modalIn 200ms linear",
        modalOut: "modalOut 200mss linear",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
