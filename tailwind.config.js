// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",    
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "port-blue": "#0E4C92",
          "port-purple": "#333052",
          "light-blue": "#B6D0E2",
          "port-white": "#FDFDFA",
        },
        fontFamily: {
          anta: ['var(--font-anta)', 'sans-serif'],
          saira: ['var(--font-saira)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  
    