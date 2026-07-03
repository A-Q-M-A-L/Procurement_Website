const routes = ['/', '/portfolio', '/our-services', '/get-a-quote']

export default defineEventHandler((event) => {
  const baseUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://frontierprojects.net'
  const now = new Date().toISOString()

  const entries = routes
    .map((route) => {
      const url = new URL(route, baseUrl).toString()
      return [
        '<url>',
        `<loc>${url}</loc>`,
        `<lastmod>${now}</lastmod>`,
        '</url>'
      ].join('')
    })
    .join('')

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>'
  ].join('')

  setHeader(event, 'content-type', 'application/xml; charset=UTF-8')
  return xml
})
