/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '786': '200px',
        '784':'150px',
        '1100':'450px'
      },
      height:{
        '1100':'370px'
      }
    
    },
  },
  plugins: [],
}

