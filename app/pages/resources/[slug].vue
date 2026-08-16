<script setup lang="ts">
import { computed } from 'vue'
import CtaBand from '../../components/sections/CtaBand.vue'
import PageHero from '../../components/sections/PageHero.vue'
import ProsePanel from '../../components/sections/ProsePanel.vue'
import ResourceCardGrid from '../../components/sections/ResourceCardGrid.vue'
import SectionIntro from '../../components/sections/SectionIntro.vue'
import { usePageSeo } from '../../composables/usePageSeo'
import { useSiteProfile } from '../../composables/useSiteProfile'
import { getResourceBySlug, resourceArticles } from '../../data/resources'

const route = useRoute()
const { companyName } = useSiteProfile()

const article = computed(() => getResourceBySlug(String(route.params.slug)))

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

usePageSeo({
  title: `${article.value.title} | ${companyName}`,
  description: article.value.excerpt,
  path: `/resources/${article.value.slug}`
})

const related = computed(() =>
  resourceArticles.filter((item) => item.slug !== article.value?.slug).slice(0, 2)
)
</script>

<template>
  <div v-if="article">
    <PageHero eyebrow="Resources" :title="article.title" :description="article.excerpt" />

    <ProsePanel>
      <p class="eyebrow">{{ article.date }}</p>
      <p v-for="(paragraph, index) in article.body" :key="index">{{ paragraph }}</p>
      <NuxtLink to="/resources" class="button button--ghost button--compact">Back to resources</NuxtLink>
    </ProsePanel>

    <section v-if="related.length" class="section-block section-block--muted">
      <div class="shell">
        <SectionIntro eyebrow="More reading" title="Related notes" />
        <ResourceCardGrid
          :articles="related"
          compact
          :show-cta="false"
          :wrap-section="false"
        />
      </div>
    </section>

    <CtaBand
      title="Ready to discuss your requirement?"
      description="Use the quote form to share project details and continue directly with Frontier Projects."
    />
  </div>
</template>
