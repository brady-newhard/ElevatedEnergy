/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A8E6Cf",
        secondary: "#008080",
        accent: "#F3DFC5",
      },
    },
  },
  plugins: [],
} 