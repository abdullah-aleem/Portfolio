/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      width:{
        '786': '200px',
        '784':'150px',
        '1100':'450px',
        'img':'500px',
        'ful':'600px',
      },
      height:{
        '1100':'370px',
        'img':'500px',
        'ful':'700px',
        'custom':'2000px'
      },
      left:{
        'custom':'500px'
      },
      colors:{
        'cyan':'#20124D',
        'primary':'#002754'
      }
    
    },  
  },
  plugins: [],
}

 