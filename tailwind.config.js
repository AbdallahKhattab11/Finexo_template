/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '480px',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(130deg, #231a6f, #0f054c)',
      },
      colors: {
        primary:"#00bbf0",
        secondary: "#007fa4",
        'black-50': 'rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

