// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/app/components',
      pathPrefix: false
    }
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://frontierprojects.net',
      companyName: process.env.NUXT_PUBLIC_COMPANY_NAME || 'Frontier Projects',
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || 'contact@frontierprojects.net',
      phone: process.env.NUXT_PUBLIC_PHONE || '+923359571564',
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3001'
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#111827' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }
      ]
    }
  }
})
