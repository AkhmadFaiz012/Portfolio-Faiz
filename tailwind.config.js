/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["main.html"],
  theme: {
    extend: {
      colors: {
        'light': '#f3f4f6',
        'dark': '#030712',
        'dark-light-1': '#64748b',
        'dark-light-2': '#94a3b8',
        'dark-light-3': '#cbd5e1',
        'primary' : '#dc2626',
      },
      fontFamily: {
        Poppins: ["poppins, sans-serif"],
        Montserrat: ["montserrat, sans-serif"],
        Roboto: ["roboto, sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens : {
          lg: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  plugins: [],
}

