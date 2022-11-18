/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(41,96,197)",
        primary_hover: "rgba(59,151,250)",
        secondary: "rgba(247,247,247)",
      },
      screens: {
        xsm: "400px",
        md: "720px",
      },
    },
    fontFamily: {
      body: [
        "IBM Plex Sans",
        "Helvetica Neue",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
