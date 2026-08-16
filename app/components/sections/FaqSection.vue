<script setup lang="ts">
import SectionIntro from './SectionIntro.vue'

defineProps<{
  title: string
  description: string
  items: Array<{
    question: string
    answer: string
  }>
}>()
</script>

<template>
  <section class="section-block">
    <div class="shell">
      <SectionIntro eyebrow="FAQ" :title="title" :description="description" />

      <div class="faq-list">
        <details v-for="item in items" :key="item.question" class="faq-item card-panel">
          <summary>
            <span>{{ item.question }}</span>
            <span class="faq-item__indicator" aria-hidden="true">+</span>
          </summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
