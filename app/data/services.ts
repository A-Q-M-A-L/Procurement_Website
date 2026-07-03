export type ServiceCategory = {
  slug: string
  title: string
  summary: string
  items: string[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'construction-services',
    title: 'Construction Services',
    summary: 'For clients who need practical on-ground construction support across residential, commercial, industrial and finishing scopes, with coordination that stays aligned to site realities.',
    items: [
      'Building Construction',
      'Residential Projects',
      'Commercial Projects',
      'Industrial Projects',
      'Renovation & Finishing Works',
      'Interior & Exterior Works'
    ]
  },
  {
    slug: 'project-procurement',
    title: 'Project Procurement',
    summary: 'For projects where sourcing, vendor follow-up and logistics can affect delivery speed, this service covers materials, equipment and procurement coordination from requirement to supply.',
    items: [
      'Construction Material Procurement',
      'Mechanical & Electrical Procurement',
      'Safety Equipment Procurement',
      'Import & Local Sourcing',
      'Vendor Management',
      'Logistics Coordination'
    ]
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    summary: 'For clients who want clearer planning, reporting and execution control, this service supports scheduling, cost awareness, resource coordination and progress visibility.',
    items: [
      'Project Planning',
      'Cost Control',
      'Resource Management',
      'Progress Monitoring',
      'Project Documentation',
      'Quality Assurance'
    ]
  },
  {
    slug: 'hse',
    title: 'HSE Solutions',
    summary: 'For sites that require safer execution and stronger documentation, this service covers risk planning, permit systems, audits and HSE records tied to real field conditions.',
    items: [
      'Risk Assessments',
      'Method Statements',
      'Safety Plans',
      'Safety Audits',
      'Work Permit Systems',
      'HSE Documentation'
    ]
  },
  {
    slug: 'modular-container-solutions',
    title: 'Modular & Container Solutions',
    summary: 'For temporary operations, field administration or security needs, this service provides modular cabins and container-based site facilities that can be adapted to project conditions.',
    items: [
      'Container Offices',
      'Portable Cabins',
      'Site Offices',
      'Security Cabins',
      'Customized Modular Buildings'
    ]
  },
  {
    slug: 'engineering-consultancy',
    title: 'Engineering Consultancy',
    summary: 'For clients needing technical clarity before or during execution, this service supports BOQs, tender documentation, evaluations and site supervision inputs for better decision-making.',
    items: [
      'Quantity Surveying',
      'BOQ Preparation',
      'Tender Documentation',
      'Site Supervision',
      'Technical Evaluation'
    ]
  }
]

export const quoteServiceOptions = serviceCategories.map((service) => service.title)
