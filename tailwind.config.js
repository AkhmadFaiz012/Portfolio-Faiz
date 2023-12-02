/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/html/page.html"],
  theme: {
    extend: {
      colors: {
        'light': '#f3f4f6',
        'dark': '#030712',
        'dark-light-1': '#64748b',
        'dark-light-2': '#94a3b8',
        'dark-light-3': '#cbd5e1',
        'primary' : '#06b6d4',
        "primary-2": '#d946ef',
        "primary-3": '#ec4899',
        "button-1": '#6366f1',

      },
      fontFamily: {
        'Poppins': ["poppins, sans-serif"],
        'Montserrat': ["montserrat, sans-serif"],
        'Roboto': ["roboto, sans-serif"],
        'open-sans': ["open-sans, sans-serif"],
        'josefin-sans': ["josefin-sans, sans-serif"],
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

