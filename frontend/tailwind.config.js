/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5499C7",
        primary1: "#3399FF",
        button: "#008000",
      },
    },
  },
  plugins: [],
};