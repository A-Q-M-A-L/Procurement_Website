export type Certification = {
  id: string
  label: string
  description: string
  href?: string
}

export const certifications: Certification[] = [
  {
    id: 'construction-license',
    label: 'Construction License',
    description: 'Registered construction services support for residential and commercial delivery scopes.'
  },
  {
    id: 'hse-compliance',
    label: 'HSE Compliance',
    description: 'Safety planning, audits and documentation practices integrated into project coordination.'
  },
  {
    id: 'iso-quality',
    label: 'Quality Systems',
    description: 'Structured review habits for scope control, documentation quality and delivery discipline.'
  },
  {
    id: 'procurement-network',
    label: 'Verified Vendor Network',
    description: 'Practical sourcing relationships for local and imported construction materials.'
  }
]
