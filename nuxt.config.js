export default {
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'edvisor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/bootstrap/bootstrap-grid.min.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts'
  ],

  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseApiUrl: process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000'
  },

  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
    ]
  },

  googleFonts: {
    families: {
      Raleway: {
        wght: [400, 500, 600, 700, 800],
      },
    },
    display: 'swap',
    download: true
  }
}
