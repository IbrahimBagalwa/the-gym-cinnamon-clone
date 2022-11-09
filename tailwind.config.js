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
        'grow-color': '#f2f2f2',
        'btn-color': 'hsla(0,0%,100%,.7)',
      },
      fontFamily: {
        'primary-font': "Mont,'arial'",
        primary: "Mont,'sans-serif'",
        'mont-semibold': "'MontSemiBold','arial'",
        'mont-bold': "'MontBold','arial'",
        'mont-heavy': "'MontHeavy','arial'",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/noise.png')",
        'hero-job': "url('/images/job-application.webp')",
      },
      boxShadow: {
        btn: 'rgb(81 53 255) 0px 0px 0px 300px inset',
        white: 'rgb(255 255 255) 0px 0px 0px 155px inset',
      },
    },
  },
  plugins: [],
};
