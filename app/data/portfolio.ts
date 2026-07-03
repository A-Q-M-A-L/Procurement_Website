export type PortfolioItem = {
  slug: string
  title: string
  category: string
  location: string
  projectType: string
  summary: string
  scope: string[]
  outcome: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'faisal-margalla-city-house',
    title: '14 Marla Residential Construction Package',
    category: 'Residential',
    location: 'Faisal Margalla City, Islamabad',
    projectType: 'Residential Build',
    summary: 'Representative owner-side support for a mid-size house build covering structural execution, finishing coordination and construction material follow-up.',
    scope: ['Grey Structure', 'Finishing Works', 'Material Procurement'],
    outcome: 'Best suited for clients who need one point of coordination between site execution and procurement follow-up.'
  },
  {
    slug: 'dha-islamabad-luxury-house',
    title: '1 Kanal Luxury House Planning & Procurement Support',
    category: 'Residential',
    location: 'DHA Phase 1, Islamabad',
    projectType: 'Residential Delivery Support',
    summary: 'A larger-format residential scope where planning inputs, vendor coordination and site supervision support need to move together instead of in isolation.',
    scope: ['Project Planning', 'Vendor Coordination', 'Site Supervision'],
    outcome: 'Useful for premium residential projects where schedule clarity and procurement discipline affect finishing quality and cost control.'
  },
  {
    slug: 'b17-islamabad-house',
    title: '2 Kanal Residential Delivery Coordination',
    category: 'Residential',
    location: 'B-17, Islamabad',
    projectType: 'Residential Coordination',
    summary: 'Representative coordination support for a broader residential build with emphasis on schedule visibility, procurement planning and quality-focused execution.',
    scope: ['Residential Construction', 'Cost Control', 'Quality Assurance'],
    outcome: 'Designed for clients who need clearer oversight across construction progress, procurement timing and quality review.'
  },
  {
    slug: 'commercial-fitout',
    title: 'Commercial Fit-Out & Finishing',
    category: 'Commercial',
    location: 'Blue Area, Islamabad',
    projectType: 'Commercial Interior Scope',
    summary: 'Commercial interior and finishing support for spaces where procurement timing, electrical coordination and delivery sequencing directly affect handover readiness.',
    scope: ['Interior Works', 'Electrical Procurement', 'Finishing Coordination'],
    outcome: 'A good fit for office and retail spaces that need coordinated finishing support instead of fragmented trade management.'
  },
  {
    slug: 'site-office-cabins',
    title: 'Site Office & Security Cabin Setup',
    category: 'Modular',
    location: 'Rawalpindi',
    projectType: 'Modular Site Facilities',
    summary: 'Portable site infrastructure for field administration, supervision and gate control, built around temporary operations that still need a professional setup.',
    scope: ['Container Office', 'Security Cabin', 'Site Setup Support'],
    outcome: 'Helps project teams establish working site infrastructure quickly without waiting for permanent facility arrangements.'
  },
  {
    slug: 'infrastructure-procurement',
    title: 'Infrastructure Procurement Support',
    category: 'Procurement',
    location: 'Lahore',
    projectType: 'Procurement-Led Support',
    summary: 'Representative sourcing support for infrastructure-oriented requirements where local procurement, import follow-up and logistics coordination influence delivery continuity.',
    scope: ['Import & Local Sourcing', 'Logistics Coordination', 'Vendor Management'],
    outcome: 'Ideal for clients who need practical procurement management without building a separate sourcing workflow in-house.'
  }
]
