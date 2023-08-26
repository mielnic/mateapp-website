/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#0b4002",
        // primary: "#d1e7dd",
        // primary: "#d1e7d4",
        // primary: "#edfaef",
        primary: "#e3ffe7",
        secondary: "#29891a",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimBlack: "rgba(0, 0, 0, 0.7)",
      },
      fontFamily: {
        poppins: ["Poppins", "Inconsolata", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
