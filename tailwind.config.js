/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.3s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        primary: {
          light: '#FED7AA', // Light Orange
          DEFAULT: '#FB923C', // Orange
          dark: '#EA580C', // Dark Orange
        },
        secondary: {
          light: '#FEF9C3', // Light Yellow
          DEFAULT: '#FACC15', // Yellow
          dark: '#CA8A04', // Dark Yellow
        },
      },
    },
  },
  plugins: [],
}