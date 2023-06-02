/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-800": "#010203",
        "primary-700": "#0d0d0d",
        "primary-600": "#121212",
        "primary-500": "#171717",
        "primary-400": "#1f1f1f",
        "primary-300": "#222021",
        "primary-200": "#242124",
        "primary-100": "#363636",
        "hero-bg": "#5A20CB",
      },
      shadows: {
        "dark-sm": "0 1px 2px 0 rgba(255, 255, 255, 0.05)", //White shadow
      },
    },
  },
  plugins: [require("daisyui")],
};
