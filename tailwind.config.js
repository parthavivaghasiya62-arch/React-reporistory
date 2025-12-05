/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script']
    },
    screens: {
    'xsm': '480px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    },
  
    container: {
      padding:'2.5rem'
    },
    extend: {
      colors: {
        'green-1': '#046547',
        'sazerac':' #FFF6E3'
      } , 
   
    }
  },
  plugins: [],
}