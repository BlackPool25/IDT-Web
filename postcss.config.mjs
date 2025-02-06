/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "tailwindcss/nesting": "postcss-nesting", // Ensure nesting is correct
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
