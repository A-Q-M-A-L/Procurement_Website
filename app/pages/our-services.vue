<script setup lang="ts">
import CtaBand from '../components/sections/CtaBand.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import InfoCardGrid from '../components/sections/InfoCardGrid.vue'
import PageHero from '../components/sections/PageHero.vue'
import ServiceGrid from '../components/sections/ServiceGrid.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'
import { faqItems, serviceAreas } from '../data/site'
import { serviceCategories } from '../data/services'

const { companyName } = useSiteProfile()

usePageSeo({
  title: `Our Services | ${companyName}`,
  description: 'Construction, procurement, project management, HSE, modular solutions and engineering consultancy.',
  path: '/our-services'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Our Services"
      title="A focused service stack for construction and procurement projects"
      description="Frontier Projects keeps the service model straightforward: clear delivery areas, practical support scopes and direct offline follow-up after inquiry."
    />

    <ServiceGrid
      title="Service categories"
      description="Each service area can support a standalone requirement or feed into a broader end-to-end project scope."
      :services="serviceCategories"
    />

    <InfoCardGrid
      eyebrow="Coverage"
      title="Service areas and project support reach"
      description="Frontier Projects can support local execution requirements and broader procurement coordination depending on project scope."
      :items="serviceAreas.map((area) => ({ title: area, description: 'Available for direct inquiry, scope review and coordination discussion based on project requirements.' }))"
    />

    <FaqSection
      title="Questions about service fit?"
      description="These answers help clarify when to contact Frontier Projects and how the services can work together."
      :items="faqItems"
    />

    <CtaBand
      title="Need a custom combination of services?"
      description="Use the quote form to explain the project and the mix of support you need. The Frontier Projects team will review it and follow up directly."
    />
  </div>
</template>
