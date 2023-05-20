/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
        200: '#F3F5F7',
      },
      gray: {
        DEFAULT: '#717171',
        dark: '#1A202C',
      },
      purple: {
        DEFAULT: '#574AE8',
      },
    },
    extend: {
      fontFamily: {
        sans: "'Lexend Deca', sans-serif",
        inter: "'Inter', sans-serif",
      },
      backgroundImage: {
        linear: 'linear-gradient(270deg, #3EA1DB 0%, #574AE8 100%)',
      },
      dropShadow: {
        DEFAULT: 'filter: drop-shadow(0px 0px 10px rgba(19, 19, 31, 0.05)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          lg: '0px',
        },
        screens: {
          lg: '900px',
        },
      },
    },
  },
  plugins: [],
}
