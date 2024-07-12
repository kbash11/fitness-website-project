/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        richblue:{
          300: "#A5D7E8",
          500: "#576CBC",
          700: "#19376D",
          900: "#0B2447"
        }
        
      }
    },
  },
  plugins: [],
}

