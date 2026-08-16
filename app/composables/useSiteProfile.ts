export const useSiteProfile = () => {
  const config = useRuntimeConfig()
  const whatsappNumber = String(config.public.whatsappNumber || '923055443110').replace(/\D/g, '')
  const whatsappMessage = encodeURIComponent(
    String(config.public.whatsappMessage || "Hi, I'd like a quote for...")
  )

  return {
    companyName: config.public.companyName as string,
    siteUrl: config.public.siteUrl as string,
    contactEmail: config.public.contactEmail as string,
    phone: config.public.phone as string,
    apiUrl: config.public.apiUrl as string,
    whatsappNumber,
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
    officeAddress: config.public.officeAddress as string,
    mapEmbedUrl: config.public.mapEmbedUrl as string,
    socialFacebook: config.public.socialFacebook as string,
    socialInstagram: config.public.socialInstagram as string,
    socialTiktok: config.public.socialTiktok as string,
    socialLinks: [
      { label: 'Facebook', href: config.public.socialFacebook as string },
      { label: 'Instagram', href: config.public.socialInstagram as string },
      { label: 'TikTok', href: config.public.socialTiktok as string }
    ].filter((link) => Boolean(link.href))
  }
}
