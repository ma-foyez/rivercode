/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
         current: 'currentColor',
        'white': '#FFFFFF',
        'gray': '#F5F6F8',            
        'dark-gray': '#353754',
        'black': '#232834',
        'blue': '#1A326A',
        'dark-blue': '#030529',
        'sky': "#4EC0F9"
      }, 
    },
  },
  plugins: [],
}

