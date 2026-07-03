<script setup lang="ts">
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
      <div class="section-intro">
        <p class="eyebrow">FAQ</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>

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
