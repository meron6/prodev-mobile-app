/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // all files in app folder
    "./components/**/*.{js,ts,jsx,tsx}" // all files in components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#34967C",   // custom color
        secondary: "#FFA800",
      },
      fontSize: {
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
      spacing: {
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
      },
      borderRadius: {
        'md': '12px',
        'lg': '36px',
      },
    },
  },
  plugins: [],
};
