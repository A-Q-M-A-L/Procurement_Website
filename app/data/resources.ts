export type ResourceArticle = {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string[]
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: 'procurement-checklist-for-house-builds',
    title: 'A Practical Procurement Checklist for House Builds',
    date: '2026-03-12',
    excerpt:
      'Material timing is often the hidden risk in residential construction. Use this checklist to keep site progress and sourcing aligned.',
    body: [
      'Residential builds stall when materials arrive late or incomplete. A short procurement checklist at the start of every phase reduces last-minute purchasing and price surprises.',
      'Begin with structural materials, then finishing packages, then specialized items with longer lead times. Confirm vendor capacity before locking a site schedule.',
      'Share drawings, approximate quantities and preferred brands early so Frontier Projects can coordinate sourcing and logistics against the real construction sequence.'
    ]
  },
  {
    slug: 'why-hse-docs-matter-early',
    title: 'Why HSE Documentation Should Start Before Site Mobilization',
    date: '2026-02-04',
    excerpt:
      'Safety planning is easier when it is part of project setup instead of a scramble after work begins.',
    body: [
      'HSE documentation is often delayed until site pressure appears. That creates avoidable risk and slows approvals when clients or contractors ask for records.',
      'Early method statements, risk assessments and inspection routines make supervision clearer and help teams respond consistently when issues arise.',
      'Frontier Projects can support HSE documentation alongside construction coordination so safety paperwork stays connected to how the site actually operates.'
    ]
  },
  {
    slug: 'modular-site-offices-quick-setup',
    title: 'Modular Site Offices: Getting Temporary Facilities Right',
    date: '2026-01-18',
    excerpt:
      'Container offices and security cabins keep field teams productive when permanent facilities are not ready yet.',
    body: [
      'Temporary site facilities still need power planning, access control and a workable layout for supervision and visitors.',
      'A modular approach lets projects establish administration and gate control quickly while permanent construction continues.',
      'If you need site offices, portable cabins or security setups, share location constraints and timeline early so delivery and placement can be coordinated cleanly.'
    ]
  }
]

export const getResourceBySlug = (slug: string) =>
  resourceArticles.find((article) => article.slug === slug)
