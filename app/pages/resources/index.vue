<script setup lang="ts">
import CtaBand from '../../components/sections/CtaBand.vue'
import PageHero from '../../components/sections/PageHero.vue'
import ResourceCardGrid from '../../components/sections/ResourceCardGrid.vue'
import { usePageSeo } from '../../composables/usePageSeo'
import { useSiteProfile } from '../../composables/useSiteProfile'
import { resourceArticles } from '../../data/resources'

const { companyName } = useSiteProfile()

usePageSeo({
  title: `Resources | ${companyName}`,
  description: 'Construction tips, procurement guidance and project coordination notes from Frontier Projects.',
  path: '/resources'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Resources"
      title="Practical notes for construction and procurement planning"
      description="Short articles that help clients prepare clearer scopes, timelines and material requirements before starting a conversation."
    />

    <ResourceCardGrid :articles="resourceArticles" />

    <CtaBand
      title="Have a project requirement ready?"
      description="Send your scope through the quote form and Frontier Projects will follow up directly."
    />
  </div>
</template>
