export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  photo: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'founder',
    name: 'Ali Rahman',
    role: 'Founder & Project Lead',
    bio: 'Leads client engagement, scope alignment and delivery coordination across construction and procurement assignments.',
    photo: '/team/ali-rahman.webp'
  },
  {
    id: 'ops',
    name: 'Hassan Mehmood',
    role: 'Operations & Site Coordination',
    bio: 'Supports site sequencing, vendor follow-up and practical execution planning for residential and commercial scopes.',
    photo: '/team/hassan-mehmood.webp'
  },
  {
    id: 'procurement',
    name: 'Ayesha Noor',
    role: 'Procurement Lead',
    bio: 'Coordinates local and import sourcing, logistics timing and vendor documentation so materials stay aligned with site needs.',
    photo: '/team/ayesha-noor.webp'
  }
]
