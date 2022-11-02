/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(81 53 255)',
        secondary: '#222222',
        'secondary-bg': '#1C1C1C',
        default: '#F6F6F6',
        'color-hover': '#5135ff',
        'paragrah-color': '#cfcfcf',
        'card-color': '#666666',
        'card-paragrah': '#525252',
        'card-green': '#91F1C3',
        'card-violet': '#52247F',
        'card-orange': '#FFCB49',
      },
      fontFamily: {
        'primary-font': ['MontHeavy', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/noise.png')",
        'hero-job': "url('/images/job-application.webp')",
      },
    },
  },
  plugins: [],
};
