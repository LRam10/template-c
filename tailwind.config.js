/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    colors:{
      'black':'#121212',
      'gray': {
        100: '#f6f5f8'
      },
      'pr-color': {
        100:'#f4bd14'
      },
      'sec-color':{
        100:'#0b5d6a'
      }
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

