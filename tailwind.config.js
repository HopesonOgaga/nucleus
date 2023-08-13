/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        custom_blue: "#3A41F1",
        custom_purple: "#791E98",
      },

      fontFamily: {
        sans: "Fira Sans",
      },
      screens: { xs: "375px" },
    },
  },
  plugins: [],
};
