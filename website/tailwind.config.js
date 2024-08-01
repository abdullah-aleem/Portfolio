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
        'primary':'#002754',
        'custom1':"#37ecba",
        'custom2':"#72afd3",
        'custom3':"#84fab0",
        'custom4':"#8fd3f4",
        'custom5':"#fccb90",
        'custom6':"#d57eeb",
        'custom7':"#30cfd0",
        'custom8':"#330867",
        'custom9':"#9890e3",
        'custom10':"#b1f4cf",
        'custom11':"#6a11cb",
        'custom12':"#2575fc",

      }
    
    },  
  },
  plugins: [],
}

 