// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo", "@nuxtjs/google-fonts", "@pinia/nuxt"],

  svgo: {
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              inlineStyles: {
                onlyMatchedOnce: false,
              },

              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
