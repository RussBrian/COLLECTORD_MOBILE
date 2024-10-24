/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        customBlueGreen:"#14A37B",
        collectorGreen:"#515940",
        collectorLightGreen:"#7B885B",
        InputCollector:"#DADADA91",
        TitleCollector:"#4F663F",
        TextCollector:"#444A34",
        borderCollectorGreen:"#7B885B",
        WhiteCards:"#D5D5D5"
      }
    },
  },
  plugins: [],
}

