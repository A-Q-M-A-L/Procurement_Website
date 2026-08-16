<script setup lang="ts">
import { computed } from 'vue'
import AboutSplit from '../components/sections/AboutSplit.vue'
import CtaBand from '../components/sections/CtaBand.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import HomeHero from '../components/sections/HomeHero.vue'
import InfoCardGrid from '../components/sections/InfoCardGrid.vue'
import PortfolioGrid from '../components/sections/PortfolioGrid.vue'
import ProcessSection from '../components/sections/ProcessSection.vue'
import ServiceGrid from '../components/sections/ServiceGrid.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import TrustStatsBar from '../components/sections/TrustStatsBar.vue'
import WhyChooseGrid from '../components/sections/WhyChooseGrid.vue'
import RevealOnScroll from '../components/site/RevealOnScroll.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'
import { faqItems, industriesServed, processSteps, siteCopy } from '../data/site'
import { portfolioItems } from '../data/portfolio'
import { serviceCategories } from '../data/services'

const { companyName } = useSiteProfile()

usePageSeo({
  title: `${companyName} | Construction & Procurement`,
  description: siteCopy.tagline,
  path: '/'
})

const homeServices = computed(() => serviceCategories.slice(0, 6))
const featuredProjects = computed(() => portfolioItems.slice(0, 3))
</script>

<template>
  <div>
    <HomeHero />
    <TrustStatsBar />

    <RevealOnScroll>
      <AboutSplit />
    </RevealOnScroll>

    <RevealOnScroll>
      <ServiceGrid
        :title="siteCopy.servicesTitle"
        :description="siteCopy.servicesDescription"
        :services="homeServices"
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <InfoCardGrid
        eyebrow="Industries Served"
        title="Support across residential, commercial, industrial and site operations"
        description="Frontier Projects is positioned for practical scopes where construction work, procurement follow-up and documentation support need to work together."
        :items="industriesServed"
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <WhyChooseGrid
        :title="siteCopy.whyChooseTitle"
        :description="siteCopy.whyChooseDescription"
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <TestimonialsSection
        :title="siteCopy.testimonialsTitle"
        :description="siteCopy.testimonialsDescription"
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <ProcessSection
        title="A simple process that keeps the conversation moving"
        description="The platform is intentionally straightforward: present the services clearly, capture useful project details and continue the engagement directly."
        :steps="processSteps"
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <PortfolioGrid
        :title="siteCopy.portfolioTitle"
        :description="siteCopy.portfolioDescription"
        :projects="featuredProjects"
        :show-view-all="true"
        compact
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <FaqSection
        title="Common questions before getting in touch"
        description="A few practical answers for clients who want to understand how Frontier Projects handles early inquiries."
        :items="faqItems.slice(0, 3)"
      />
    </RevealOnScroll>

    <RevealOnScroll>
      <CtaBand
        title="Ready to discuss a project requirement?"
        description="Use the quote form to share your scope, location and timeline. Frontier Projects will review it directly and continue the discussion by email, phone or WhatsApp."
      />
    </RevealOnScroll>
  </div>
</template>
