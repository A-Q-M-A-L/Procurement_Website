import { officeLocation, serviceAreas } from '~/data/site'

type UsePageSeoOptions = {
  title: string
  description: string
  path: string
}

export const usePageSeo = ({ title, description, path }: UsePageSeoOptions) => {
  const {
    companyName,
    contactEmail,
    phone,
    siteUrl,
    socialLinks,
    officeAddress
  } = useSiteProfile()
  const baseUrl = siteUrl || 'https://frontierprojects.net'
  const canonicalUrl = new URL(path, baseUrl).toString()
  const ogImage = new URL('/og-frontier.svg', baseUrl).toString()
  const sameAs = socialLinks.map((link) => link.href)

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
              telephone: phone,
              logo: new URL('/logo.png', baseUrl).toString(),
              sameAs
            },
            {
              '@type': 'LocalBusiness',
              name: companyName,
              url: baseUrl,
              email: contactEmail,
              telephone: phone,
              description,
              image: ogImage,
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: officeAddress || officeLocation.addressLine,
                addressLocality: officeLocation.city,
                addressRegion: officeLocation.region,
                postalCode: officeLocation.postalCode,
                addressCountry: officeLocation.country
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: officeLocation.latitude,
                longitude: officeLocation.longitude
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00'
                }
              ],
              areaServed: serviceAreas,
              sameAs
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
