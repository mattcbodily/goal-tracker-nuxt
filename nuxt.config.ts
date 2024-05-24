// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      CLIENT_EMAIL: process.env.NUXT_PUBLIC_CLIENT_EMAIL,
      CLIENT_ID: process.env.NUXT_PUBLIC_CLIENT_ID,
      API_KEY: process.env.NUXT_PUBLIC_API_KEY,
      SHEET_ID: process.env.NUXT_PUBLIC_SHEET_ID
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
