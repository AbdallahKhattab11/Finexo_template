
/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '480px',
        md2:"992px",
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(130deg, #231a6f, #0f054c)',
      },
      colors: {
        primary:"#2196f3",
        secondary: "#007fa4",
        'black-50': 'rgba(0, 0, 0, 0.5)',
        'primary-bg':"#00204a",
      },
      fontSize: {
        'responsive-font': 'clamp(2rem, 2.5vw, 3rem)',
      }
    },
  },
  plugins: [],
}

