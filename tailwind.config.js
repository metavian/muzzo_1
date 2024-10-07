/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary_purple: "var(--primary-purple)",
        primary_blue: "var(--primary-blue)",
        primary_purple_200: "var(--primary-purple-200)",
      },
    },
  },
  plugins: [],
};
