export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    apiUrl: process.env.API_URL || "http://localhost:3000"
  },
  head: {
    title: "edvisor",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
<<<<<<< HEAD
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/bootstrap/bootstrap-grid.min.css', '~/assets/scss/main.scss'],
=======
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/bootstrap/bootstrap-grid.min.css", "~/assets/scss/main.scss"],
>>>>>>> 16b0af5 (Add nuxt/http)

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
<<<<<<< HEAD
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/google-fonts'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
=======
    "@nuxt/typescript-build"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/google-fonts", "@nuxt/http"],

  http: {
    // proxyHeaders: false
  },
>>>>>>> 16b0af5 (Add nuxt/http)

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
<<<<<<< HEAD
    scss: ['~/assets/scss/variables.scss']
=======
    scss: ["~/assets/scss/variables.scss"]
>>>>>>> 16b0af5 (Add nuxt/http)
  },

  googleFonts: {
    families: {
      Raleway: {
        wght: [400, 500, 600, 700, 800]
      }
    },
    display: "swap",
    download: true
  }
};
