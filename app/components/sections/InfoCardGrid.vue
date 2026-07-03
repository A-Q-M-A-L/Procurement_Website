<script setup lang="ts">
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
      <div class="section-intro">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>

      <div class="info-grid">
        <article v-for="item in items" :key="item.title" class="info-card card-panel">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
