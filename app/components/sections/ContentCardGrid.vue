<script setup lang="ts">
import ContentCard from './ContentCard.vue'

export type ContentCardItem = {
  eyebrow?: string
  title: string
  body: string
}

withDefaults(
  defineProps<{
    items: ContentCardItem[]
    gridClass?: string
    muted?: boolean
    titleTag?: 'h2' | 'h3'
  }>(),
  {
    gridClass: 'about-page-grid',
    muted: false,
    titleTag: 'h2'
  }
)
</script>

<template>
  <section class="section-block" :class="{ 'section-block--muted': muted }">
    <div class="shell" :class="gridClass">
      <ContentCard
        v-for="item in items"
        :key="item.title"
        :eyebrow="item.eyebrow"
        :title="item.title"
        :description="item.body"
        :title-tag="titleTag"
      />
    </div>
  </section>
</template>
