export type TrustStat = {
  id: string
  value: string
  label: string
}

export const trustStats: TrustStat[] = [
  { id: 'projects', value: '50+', label: 'Projects Supported' },
  { id: 'years', value: '8+', label: 'Years Experience' },
  { id: 'clients', value: '40+', label: 'Happy Clients' },
  { id: 'areas', value: '4+', label: 'Service Regions' }
]
