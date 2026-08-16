export type Testimonial = {
  id: string
  name: string
  projectType: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'ahmed-khan',
    name: 'Ahmed Khan',
    projectType: 'Residential Build · Islamabad',
    quote:
      'Frontier Projects kept construction progress and material follow-up aligned. We always knew what was needed next on site and what was already in motion for procurement.',
    rating: 5
  },
  {
    id: 'sara-malik',
    name: 'Sara Malik',
    projectType: 'Commercial Fit-Out · Blue Area',
    quote:
      'Clear communication and practical scheduling made a complicated finishing package feel manageable. The team responded quickly when vendor timing shifted.',
    rating: 5
  },
  {
    id: 'usman-raza',
    name: 'Usman Raza',
    projectType: 'Modular Site Facilities · Rawalpindi',
    quote:
      'Our site office and security cabin setup was handled without delay. Coordination was direct and the delivery matched what we discussed at the start.',
    rating: 5
  },
  {
    id: 'nadia-hussain',
    name: 'Nadia Hussain',
    projectType: 'Procurement Support · Lahore',
    quote:
      'Sourcing and logistics follow-up were much clearer than our previous ad-hoc purchasing. Frontier Projects helped us stay ahead of material gaps.',
    rating: 4
  },
  {
    id: 'bilal-ahmed',
    name: 'Bilal Ahmed',
    projectType: 'Luxury House Coordination · DHA',
    quote:
      'Planning inputs, vendor coordination and site supervision support stayed connected. That saved us from chasing separate teams for every decision.',
    rating: 5
  },
  {
    id: 'farah-iqbal',
    name: 'Farah Iqbal',
    projectType: 'Residential Delivery · B-17',
    quote:
      'We appreciated the straightforward process: share the requirement, clarify scope, and continue by phone or email without unnecessary layers.',
    rating: 5
  }
]
