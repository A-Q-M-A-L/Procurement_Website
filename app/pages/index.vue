<script setup lang="ts">
import { computed } from 'vue'
import CtaBand from '../components/sections/CtaBand.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import HomeHero from '../components/sections/HomeHero.vue'
import InfoCardGrid from '../components/sections/InfoCardGrid.vue'
import PortfolioGrid from '../components/sections/PortfolioGrid.vue'
import ProcessSection from '../components/sections/ProcessSection.vue'
import ServiceGrid from '../components/sections/ServiceGrid.vue'
import WhyChooseGrid from '../components/sections/WhyChooseGrid.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'
import { aboutHighlights, faqItems, industriesServed, processSteps, siteCopy } from '../data/site'
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

    <section class="section-block">
      <div class="shell about-split">
        <div class="section-intro section-intro--left">
          <p class="eyebrow">About Frontier Projects</p>
          <h2>{{ siteCopy.aboutTitle }}</h2>
          <p>{{ siteCopy.aboutDescription }}</p>
        </div>

        <div class="about-split__cards">
          <article v-for="item in aboutHighlights" :key="item.title" class="card-panel about-note">
            <strong>{{ item.title }}</strong>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <ServiceGrid
      :title="siteCopy.servicesTitle"
      :description="siteCopy.servicesDescription"
      :services="homeServices"
    />

    <InfoCardGrid
      eyebrow="Industries Served"
      title="Support across residential, commercial, industrial and site operations"
      description="Frontier Projects is positioned for practical scopes where construction work, procurement follow-up and documentation support need to work together."
      :items="industriesServed"
    />

    <WhyChooseGrid
      :title="siteCopy.whyChooseTitle"
      :description="siteCopy.whyChooseDescription"
    />

    <ProcessSection
      title="A simple process that keeps the conversation moving"
      description="The platform is intentionally straightforward: present the services clearly, capture useful project details and continue the engagement directly."
      :steps="processSteps"
    />

    <PortfolioGrid
      :title="siteCopy.portfolioTitle"
      :description="siteCopy.portfolioDescription"
      :projects="featuredProjects"
      :show-view-all="true"
    />

    <FaqSection
      title="Common questions before getting in touch"
      description="A few practical answers for clients who want to understand how Frontier Projects handles early inquiries."
      :items="faqItems.slice(0, 3)"
    />

    <CtaBand
      title="Ready to discuss a project requirement?"
      description="Use the quote form to share your scope, location and timeline. Frontier Projects will review it directly and continue the discussion by email or phone."
    />
  </div>
</template>
