<script setup lang="ts">
import PageHero from '../components/sections/PageHero.vue'
import ProsePanel from '../components/sections/ProsePanel.vue'
import { usePageSeo } from '../composables/usePageSeo'
import { useSiteProfile } from '../composables/useSiteProfile'

const { companyName, contactEmail } = useSiteProfile()

usePageSeo({
  title: `Privacy Policy | ${companyName}`,
  description: 'How Frontier Projects collects and uses inquiry information submitted through the website.',
  path: '/privacy-policy'
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Legal"
      title="Privacy Policy"
      description="This policy explains how Frontier Projects handles personal information submitted through the brochure website and quote form."
    />

    <ProsePanel>
      <h2>Information we collect</h2>
      <p>
        When you submit a quote request, we collect the details you provide such as your name, email address, phone number,
        project location, timeline notes and message content. We may also receive technical data needed to operate the site securely.
      </p>

      <h2>How we use information</h2>
      <p>
        Inquiry details are used to review your requirement, respond by email or phone, and continue project discussions.
        We do not sell personal information.
      </p>

      <h2>Communication channels</h2>
      <p>
        If you contact us through WhatsApp, email or phone, those conversations are handled by the Frontier Projects team for
        coordination and follow-up only.
      </p>

      <h2>Data retention</h2>
      <p>
        Quote submissions and related correspondence are retained as needed to manage active inquiries and maintain ordinary
        business records. Contact {{ contactEmail }} if you need to update or remove information you previously shared.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable technical and operational measures to protect inquiry submissions in transit and during review.
        No method of transmission is completely risk-free.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, email <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.
      </p>
    </ProsePanel>
  </div>
</template>
