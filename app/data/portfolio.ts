export type PortfolioImage = {
  src: string
  alt: string
  kind: 'before' | 'after' | 'gallery'
}

export type PortfolioItem = {
  slug: string
  title: string
  category: string
  location: string
  projectType: string
  summary: string
  scope: string[]
  outcome: string
  images: PortfolioImage[]
  showBeforeAfter?: boolean
}

export const portfolioCategories = ['All', 'Residential', 'Commercial', 'Industrial', 'Modular'] as const

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'faisal-margalla-city-house',
    title: '14 Marla Residential Construction Package',
    category: 'Residential',
    location: 'Faisal Margalla City, Islamabad',
    projectType: 'Residential Build',
    summary:
      'Representative owner-side support for a mid-size house build covering structural execution, finishing coordination and construction material follow-up.',
    scope: ['Grey Structure', 'Finishing Works', 'Material Procurement'],
    outcome: 'Best suited for clients who need one point of coordination between site execution and procurement follow-up.',
    showBeforeAfter: true,
    images: [
      {
        src: '/portfolio/residential-before.webp',
        alt: 'Residential site before finishing works',
        kind: 'before'
      },
      {
        src: '/portfolio/residential-after.webp',
        alt: 'Residential house after coordinated finishing',
        kind: 'after'
      },
      {
        src: '/portfolio/residential-gallery-1.webp',
        alt: 'Residential construction progress overview',
        kind: 'gallery'
      }
    ]
  },
  {
    slug: 'dha-islamabad-luxury-house',
    title: '1 Kanal Luxury House Planning & Procurement Support',
    category: 'Residential',
    location: 'DHA Phase 1, Islamabad',
    projectType: 'Residential Delivery Support',
    summary:
      'A larger-format residential scope where planning inputs, vendor coordination and site supervision support need to move together instead of in isolation.',
    scope: ['Project Planning', 'Vendor Coordination', 'Site Supervision'],
    outcome:
      'Useful for premium residential projects where schedule clarity and procurement discipline affect finishing quality and cost control.',
    images: [
      {
        src: '/portfolio/luxury-gallery-1.webp',
        alt: 'Luxury residential planning and site coordination',
        kind: 'gallery'
      },
      {
        src: '/portfolio/luxury-gallery-2.webp',
        alt: 'Premium residential finishing coordination',
        kind: 'gallery'
      }
    ]
  },
  {
    slug: 'b17-islamabad-house',
    title: '2 Kanal Residential Delivery Coordination',
    category: 'Residential',
    location: 'B-17, Islamabad',
    projectType: 'Residential Coordination',
    summary:
      'Representative coordination support for a broader residential build with emphasis on schedule visibility, procurement planning and quality-focused execution.',
    scope: ['Residential Construction', 'Cost Control', 'Quality Assurance'],
    outcome:
      'Designed for clients who need clearer oversight across construction progress, procurement timing and quality review.',
    images: [
      {
        src: '/portfolio/residential-gallery-2.webp',
        alt: 'Large residential delivery coordination',
        kind: 'gallery'
      }
    ]
  },
  {
    slug: 'commercial-fitout',
    title: 'Commercial Fit-Out & Finishing',
    category: 'Commercial',
    location: 'Blue Area, Islamabad',
    projectType: 'Commercial Interior Scope',
    summary:
      'Commercial interior and finishing support for spaces where procurement timing, electrical coordination and delivery sequencing directly affect handover readiness.',
    scope: ['Interior Works', 'Electrical Procurement', 'Finishing Coordination'],
    outcome:
      'A good fit for office and retail spaces that need coordinated finishing support instead of fragmented trade management.',
    showBeforeAfter: true,
    images: [
      {
        src: '/portfolio/commercial-before.webp',
        alt: 'Commercial space before fit-out',
        kind: 'before'
      },
      {
        src: '/portfolio/commercial-after.webp',
        alt: 'Commercial space after finishing coordination',
        kind: 'after'
      },
      {
        src: '/portfolio/commercial-gallery-1.webp',
        alt: 'Commercial fit-out progress',
        kind: 'gallery'
      }
    ]
  },
  {
    slug: 'site-office-cabins',
    title: 'Site Office & Security Cabin Setup',
    category: 'Modular',
    location: 'Rawalpindi',
    projectType: 'Modular Site Facilities',
    summary:
      'Portable site infrastructure for field administration, supervision and gate control, built around temporary operations that still need a professional setup.',
    scope: ['Container Office', 'Security Cabin', 'Site Setup Support'],
    outcome:
      'Helps project teams establish working site infrastructure quickly without waiting for permanent facility arrangements.',
    images: [
      {
        src: '/portfolio/modular-gallery-1.webp',
        alt: 'Modular site office setup',
        kind: 'gallery'
      },
      {
        src: '/portfolio/modular-gallery-2.webp',
        alt: 'Security cabin and site access facilities',
        kind: 'gallery'
      }
    ]
  },
  {
    slug: 'infrastructure-procurement',
    title: 'Infrastructure Procurement Support',
    category: 'Industrial',
    location: 'Lahore',
    projectType: 'Procurement-Led Support',
    summary:
      'Representative sourcing support for infrastructure-oriented requirements where local procurement, import follow-up and logistics coordination influence delivery continuity.',
    scope: ['Import & Local Sourcing', 'Logistics Coordination', 'Vendor Management'],
    outcome:
      'Ideal for clients who need practical procurement management without building a separate sourcing workflow in-house.',
    images: [
      {
        src: '/portfolio/industrial-gallery-1.webp',
        alt: 'Industrial procurement and logistics coordination',
        kind: 'gallery'
      },
      {
        src: '/portfolio/industrial-gallery-2.webp',
        alt: 'Infrastructure materials staging',
        kind: 'gallery'
      }
    ]
  }
]

export const filterPortfolioByCategory = (category: string) => {
  if (category === 'All') return portfolioItems
  return portfolioItems.filter((item) => item.category === category)
}
