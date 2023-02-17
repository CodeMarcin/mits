/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
  theme: {
    extend: {
      colors: {
        title: "#0046CB",
        main: "#282835",
        second: "#818992",
      },
    },
  },
  plugins: [],
};
