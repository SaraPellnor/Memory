/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#d3edd2", 
        lightBlue: "#51adc2", 
        yellow: "#fdc83e",
        darkBlue: "#2c6580", 
        white: "#c3dfe4",
      },
    },
  },
  plugins: [],
}