/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          vinotinto: "#420407",
          negro: "#0D0D0D",
          beige: "#DBBEA9",
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"]
        }
      },
    },
    plugins: [],
  }
  