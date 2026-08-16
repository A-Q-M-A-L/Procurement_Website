<script setup lang="ts">
import { computed } from 'vue'
import AboutHighlights from '../components/sections/AboutHighlights.vue'
import CertificationBadges from '../components/sections/CertificationBadges.vue'
import ContactCard from '../components/sections/ContactCard.vue'
import ContentCardGrid from '../components/sections/ContentCardGrid.vue'
import CtaBand from '../components/sections/CtaBand.vue'
import PageHero from '../components/sections/PageHero.vue'
import SectionIntro from '../components/sections/SectionIntro.vue'
import ServiceMap from '../components/sections/ServiceMap.vue'
import TeamGrid from '../components/sections/TeamGrid.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'
import { aboutHighlights, officeLocation, serviceAreas, siteCopy } from '../data/site'
import { teamMembers } from '../data/team'

const { companyName, contactEmail, phone } = useSiteProfile()

usePageSeo({
  title: `About | ${companyName}`,
  description: siteCopy.aboutMission,
  path: '/about'
})

const missionItems = computed(() => [
  {
    eyebrow: 'Mission',
    title: siteCopy.aboutMissionTitle,
    body: siteCopy.aboutMission
  },
  {
    eyebrow: 'Background',
    title: siteCopy.aboutHistoryTitle,
    body: siteCopy.aboutHistory
  }
])
</script>

<template>
  <div>
    <PageHero
      eyebrow="About Us"
      :title="siteCopy.aboutTitle"
      :description="siteCopy.aboutDescription"
    />

    <ContentCardGrid :items="missionItems"/>

    <TeamGrid :members="teamMembers" />

    <section class="section-block">
      <div class="shell">
        <SectionIntro eyebrow="How we work" title="Practical highlights" />
        <AboutHighlights :items="aboutHighlights" layout="page" />
      </div>
    </section>

    <section class="section-block section-block--muted">
      <div class="shell">
        <SectionIntro
          eyebrow="Credentials"
          title="Certifications and compliance focus"
          description="Licenses, HSE practices and quality systems that support dependable project coordination."
        />
        <CertificationBadges />
      </div>
    </section>

    <section class="section-block">
      <div class="shell about-contact-grid">
        <ServiceMap
          title="Visit and service coverage"
          :description="`${officeLocation.addressLine}. Primary coordination across Islamabad and surrounding regions.`"
        />
        <ContactCard
          eyebrow="Service Areas"
          title="Where we support projects"
          :list="serviceAreas"
        >
          <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
          <a :href="`tel:${phone}`">{{ phone }}</a>
        </ContactCard>
      </div>
    </section>

    <CtaBand
      title="Want to discuss a project with the team?"
      description="Share your requirement through the quote form or continue directly by phone, email or WhatsApp."
    />
  </div>
</template>
