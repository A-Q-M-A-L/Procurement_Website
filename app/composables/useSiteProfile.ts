export const useSiteProfile = () => {
  const config = useRuntimeConfig()

  return {
    companyName: config.public.companyName,
    siteUrl: config.public.siteUrl,
    contactEmail: config.public.contactEmail,
    phone: config.public.phone,
    apiUrl: config.public.apiUrl
  }
}
