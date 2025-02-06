/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css", // Added to ensure styles are applied
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#4A90E2",
          orange: "#F5A623",
        },
        secondary: {
          cream: "#FFF8E7",
        },
        text: {
          dark: "#333333",
          light: "#FFFFFF",
        },
        border: "#e5e5e5", // Set a static fallback color
        input: "#d1d5db",
        ring: "#9ca3af",
        background: "#ffffff",
        foreground: "#000000",
      },
      fontFamily: {
        sans: ["Arial", "Roboto", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
