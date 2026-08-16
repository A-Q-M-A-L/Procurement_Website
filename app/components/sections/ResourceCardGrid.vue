<script setup lang="ts">
import type { ResourceArticle } from '~/data/resources'

withDefaults(
  defineProps<{
    articles: ResourceArticle[]
    compact?: boolean
    showDate?: boolean
    showCta?: boolean
    wrapSection?: boolean
    muted?: boolean
  }>(),
  {
    compact: false,
    showDate: true,
    showCta: true,
    wrapSection: true,
    muted: false
  }
)
</script>

<template>
  <component
    :is="wrapSection ? 'section' : 'div'"
    :class="wrapSection ? ['section-block', muted ? 'section-block--muted' : ''] : undefined"
  >
    <div :class="wrapSection ? 'shell resources-grid' : 'resources-grid'">
      <article
        v-for="article in articles"
        :key="article.slug"
        class="resource-card card-panel"
      >
        <p v-if="showDate && !compact" class="eyebrow">{{ article.date }}</p>
        <component :is="compact ? 'h3' : 'h2'">
          <NuxtLink :to="`/resources/${article.slug}`">{{ article.title }}</NuxtLink>
        </component>
        <p>{{ article.excerpt }}</p>
        <NuxtLink
          v-if="showCta && !compact"
          :to="`/resources/${article.slug}`"
          class="button button--ghost button--compact"
        >
          Read article
        </NuxtLink>
      </article>
    </div>
  </component>
</template>
