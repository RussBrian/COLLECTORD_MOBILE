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
        InputCollector:"#EAEAEA",
        TitleCollector:"#4F663F"
      }
    },
  },
  plugins: [],
}

