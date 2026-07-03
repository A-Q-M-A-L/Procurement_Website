<script setup lang="ts">
import FaqSection from '../components/sections/FaqSection.vue'
import PageHero from '../components/sections/PageHero.vue'
import QuoteForm from '../components/sections/QuoteForm.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'
import { faqItems, quoteHighlights, serviceAreas, siteCopy } from '../data/site'

const { companyName, contactEmail, phone } = useSiteProfile()

usePageSeo({
  title: `Get a Quote | ${companyName}`,
  description: 'Send your Frontier Projects requirement through the quote form and continue the discussion offline.',
  path: '/get-a-quote'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Get a Quote"
      :title="siteCopy.quoteTitle"
      :description="siteCopy.quoteDescription"
    />

    <section class="section-block">
      <div class="shell quote-page">
        <QuoteForm />

        <aside class="quote-page__sidebar">
          <article
            v-for="item in quoteHighlights"
            :key="item.title"
            class="card-panel contact-card"
          >
            <p class="eyebrow">Inquiry Support</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>

          <article class="card-panel contact-card">
            <p class="eyebrow">Direct Contact</p>
            <h3>Email and phone</h3>
            <p>Use direct contact if you already have drawings, BOQs, vendor lists or supporting scope notes to discuss.</p>
            <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
            <a :href="`tel:${phone}`">{{ phone }}</a>
          </article>

          <article class="card-panel contact-card">
            <p class="eyebrow">Coverage</p>
            <h3>Representative service areas</h3>
            <ul class="contact-card__list">
              <li v-for="area in serviceAreas" :key="area">{{ area }}</li>
            </ul>
          </article>
        </aside>
      </div>
    </section>

    <FaqSection
      title="Questions before you submit?"
      description="A few practical answers to help you decide what to include in your inquiry."
      :items="faqItems"
    />
  </div>
</template>
