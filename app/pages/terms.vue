<script setup lang="ts">
import PageHero from '../components/sections/PageHero.vue'
import ProsePanel from '../components/sections/ProsePanel.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'

const { companyName, contactEmail } = useSiteProfile()

usePageSeo({
  title: `Terms of Use | ${companyName}`,
  description: 'Terms governing use of the Frontier Projects brochure website and inquiry form.',
  path: '/terms'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Legal"
      title="Terms of Use"
      description="These terms govern use of the Frontier Projects website, portfolio content and quote inquiry process."
    />

    <ProsePanel>
      <h2>Website purpose</h2>
      <p>
        This site presents Frontier Projects services, representative portfolio examples and a direct inquiry form.
        Submitting a quote request does not create a contract until both parties agree commercial and delivery terms offline.
      </p>

      <h2>Portfolio content</h2>
      <p>
        Portfolio entries, statistics, testimonials and imagery are provided to illustrate service capability and typical project contexts.
        Frontier Projects may update materials as newer project photography and case details become available.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the quote form, attempt unauthorized access to systems, or submit abusive, fraudulent or unlawful content.
        We may ignore or block submissions that appear spam-related or incomplete.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        Information on this website is provided for general communication and inquiry purposes. Frontier Projects is not
        liable for decisions made solely on brochure content without direct discussion and written agreement.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.
      </p>
    </ProsePanel>
  </div>
</template>
