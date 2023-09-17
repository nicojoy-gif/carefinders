/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        customBlue: '#E0E4EC',
        textColor: '#08299B',
        darkgray: '#E0E4EC',
        lightgray: '#F2F2F2',
       
      }
    },
  },
  plugins: [],
}

