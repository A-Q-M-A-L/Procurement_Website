<script setup lang="ts">
import CtaBand from '../components/sections/CtaBand.vue'
import PageHero from '../components/sections/PageHero.vue'
import PortfolioGrid from '../components/sections/PortfolioGrid.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'
import { portfolioItems } from '../data/portfolio'

const { companyName } = useSiteProfile()

usePageSeo({
  title: `Portfolio | ${companyName}`,
  description: 'Representative Frontier Projects project types across residential, commercial, modular and procurement-led scopes.',
  path: '/portfolio'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Portfolio"
      title="Representative project types and delivery support"
      description="A portfolio-style overview of the kinds of residential, commercial, modular and procurement-led requirements Frontier Projects can coordinate."
    />

    <PortfolioGrid
      title="Representative project selection"
      description="These entries are designed to show the type of scope Frontier Projects can support, from construction coordination to procurement and modular site requirements."
      :projects="portfolioItems"
    />

    <CtaBand
      title="Need similar support for your project?"
      description="Share the project type, location, timeline and required support. Frontier Projects will review the inquiry and continue the discussion directly."
    />
  </div>
</template>
