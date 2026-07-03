import { serviceAreas } from '~/data/site'

type UsePageSeoOptions = {
  title: string
  description: string
  path: string
}

export const usePageSeo = ({ title, description, path }: UsePageSeoOptions) => {
  const { companyName, contactEmail, phone, siteUrl } = useSiteProfile()
  const baseUrl = siteUrl || 'https://frontierprojects.net'
  const canonicalUrl = new URL(path, baseUrl).toString()
  const ogImage = new URL('/og-frontier.svg', baseUrl).toString()

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonicalUrl,
    ogSiteName: companyName,
    ogImage,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage
  })

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
    script: [
      {
        type: 'application/ld+json',
        key: `ld-json-${path}`,
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: companyName,
              url: baseUrl,
              email: contactEmail,
              telephone: phone
            },
            {
              '@type': 'LocalBusiness',
              name: companyName,
              url: baseUrl,
              email: contactEmail,
              telephone: phone,
              description,
              areaServed: serviceAreas
            },
            {
              '@type': 'WebSite',
              name: companyName,
              url: baseUrl
            }
          ]
        })
      }
    ]
  })
}
