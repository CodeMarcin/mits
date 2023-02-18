import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
export default <Partial<Config>>{
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        title: "#0046CB",
        main: "#282835",
        second: "#818992",
        blue: "#0046CB",
        blueSoft: "#AABEE5",
        red: "#FD7D86",
        redSoft: "#F0CED1",
        green: "#00D793",
        greenSoft: "#C4F0E2",
      },
    },
    fontFamily: {
      fontSecond: "Poppins",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
