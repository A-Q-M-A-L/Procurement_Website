<script setup lang="ts">
import ContactCard from "../components/sections/ContactCard.vue";
import FaqSection from "../components/sections/FaqSection.vue";
import PageHero from "../components/sections/PageHero.vue";
import QuoteForm from "../components/sections/QuoteForm.vue";
import ServiceMap from "../components/sections/ServiceMap.vue";
import { usePageSeo } from "../composables/usePageSeo";
import { useSiteProfile } from "../composables/useSiteProfile";
import {
  faqItems,
  quoteHighlights,
  serviceAreas,
  siteCopy,
} from "../data/site";

const { companyName, contactEmail, phone, whatsappUrl } = useSiteProfile();

usePageSeo({
  title: `Get a Quote | ${companyName}`,
  description:
    "Send your Frontier Projects requirement through the quote form and continue the discussion offline.",
  path: "/get-a-quote",
});
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
          <ContactCard
            v-for="item in quoteHighlights"
            :key="item.title"
            eyebrow="Inquiry Support"
            :title="item.title"
            :description="item.description"
          />

          <ContactCard
            eyebrow="Direct Contact"
            title="Email, phone and WhatsApp"
            description="Use direct contact if you already have drawings, BOQs, vendor lists or supporting scope notes to discuss."
          >
            <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
            <a :href="`tel:${phone}`">{{ phone }}</a>
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
              >Chat on WhatsApp</a
            >
          </ContactCard>
        </aside>

        <ServiceMap />

        <ContactCard
          eyebrow="Coverage"
          title="Service areas"
          :list="serviceAreas"
        />
      </div>
    </section>

    <FaqSection
      title="Questions before you submit?"
      description="A few practical answers to help you decide what to include in your inquiry."
      :items="faqItems"
    />
  </div>
</template>
