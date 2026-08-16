<script setup lang="ts">
import { ref } from 'vue'
import CtaBand from '../components/sections/CtaBand.vue'
import PageHero from '../components/sections/PageHero.vue'
import PortfolioGrid from '../components/sections/PortfolioGrid.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'
import { portfolioItems } from '../data/portfolio'

const { companyName } = useSiteProfile()
const activeCategory = ref('All')

usePageSeo({
  title: `Portfolio | ${companyName}`,
  description:
    'Representative Frontier Projects photo gallery across residential, commercial, industrial and modular scopes.',
  path: '/portfolio'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Portfolio"
      title="Project gallery with delivery support examples"
      description="Browse representative project types across residential, commercial, industrial and modular scopes, with site and delivery photography from the gallery."
    />

    <PortfolioGrid
      title="Project photo gallery"
      description="Filter by category and open images in the lightbox. Renovation-style entries include a before/after comparison slider."
      :projects="portfolioItems"
      show-filters
      v-model:active-category="activeCategory"
    />

    <CtaBand
      title="Need similar support for your project?"
      description="Share the project type, location, timeline and required support. Frontier Projects will review the inquiry and continue the discussion directly."
    />
  </div>
</template>
