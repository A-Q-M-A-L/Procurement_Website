<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description: string
}>()
</script>

<template>
  <section class="page-hero">
    <div class="shell">
      <div class="page-hero__panel">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>
        <p class="lead">{{ description }}</p>
      </div>
    </div>
  </section>
</template>
