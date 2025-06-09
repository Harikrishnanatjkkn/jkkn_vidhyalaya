/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
} 