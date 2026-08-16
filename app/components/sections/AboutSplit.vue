<script setup lang="ts">
import AboutHighlights from './AboutHighlights.vue'
import SectionIntro from './SectionIntro.vue'
import { aboutHighlights, siteCopy } from '~/data/site'

defineProps<{
  ctaLabel?: string
  ctaTo?: string
}>()
</script>

<template>
  <section class="section-block">
    <div class="shell about-split">
      <SectionIntro
        eyebrow="About Frontier Projects"
        :title="siteCopy.aboutTitle"
        :description="siteCopy.aboutDescription"
        variant="left"
      >
        <NuxtLink :to="ctaTo || '/about'" class="button button--ghost">
          {{ ctaLabel || 'About the team' }}
        </NuxtLink>
      </SectionIntro>

      <AboutHighlights :items="aboutHighlights" layout="split" />
    </div>
  </section>
</template>
