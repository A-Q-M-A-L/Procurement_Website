<script setup lang="ts">
import SectionIntro from './SectionIntro.vue'

defineProps<{
  eyebrow?: string
  title: string
  description: string
  items: Array<{
    title: string
    description: string
  }>
}>()
</script>

<template>
  <section class="section-block">
    <div class="shell">
      <SectionIntro :eyebrow="eyebrow" :title="title" :description="description" />

      <div class="info-grid">
        <article v-for="item in items" :key="item.title" class="info-card card-panel">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
