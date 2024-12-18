/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          300: "#d3d3d3",
        },
        purple: {
          300: "#dde4fb",
          500: "#4e5393",
          600: "#4745dc",
        },
      },
    },
  },
  plugins: [],
};
