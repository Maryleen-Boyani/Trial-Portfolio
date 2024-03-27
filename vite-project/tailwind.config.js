/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.jsx',
    './src/components/Navbar/Navbar.jsx',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {

    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
   
    extend: {},
  },
  plugins: [],
 }


