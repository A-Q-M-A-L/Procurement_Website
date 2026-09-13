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
      // Empty string = same-origin /quote (Docker nginx). Use ?? so "" is kept.
      apiUrl: process.env.NUXT_PUBLIC_API_URL ?? 'http://localhost:3001',
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '923055443110',
      whatsappMessage: process.env.NUXT_PUBLIC_WHATSAPP_MESSAGE || "Hi, I'd like a quote for...",
      officeAddress: process.env.NUXT_PUBLIC_OFFICE_ADDRESS || 'Blue Area, Islamabad, Pakistan',
      mapEmbedUrl:
        process.env.NUXT_PUBLIC_MAP_EMBED_URL ||
        'https://maps.google.com/maps?q=Blue%20Area%2C%20Islamabad%2C%20Pakistan&z=14&output=embed',
      socialFacebook:
        process.env.NUXT_PUBLIC_SOCIAL_FACEBOOK || 'https://www.facebook.com/profile.php?id=61593094692015',
      socialInstagram:
        process.env.NUXT_PUBLIC_SOCIAL_INSTAGRAM || 'https://www.instagram.com/frontier.projects/',
      socialTiktok: process.env.NUXT_PUBLIC_SOCIAL_TIKTOK || 'https://www.tiktok.com/@frontierprojects'
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml',
        '/about',
        '/resources',
        '/privacy-policy',
        '/terms',
        '/resources/procurement-checklist-for-house-builds',
        '/resources/why-hse-docs-matter-early',
        '/resources/modular-site-offices-quick-setup'
      ]
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
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
