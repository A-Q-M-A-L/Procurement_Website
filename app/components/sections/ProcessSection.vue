<script setup lang="ts">
defineProps<{
  title: string
  description: string
  steps: Array<{
    title: string
    description: string
  }>
}>()
</script>

<template>
  <section class="section-block section-block--muted">
    <div class="shell">
      <div class="section-intro">
        <p class="eyebrow">How We Work</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>

      <div class="process-grid">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="process-card card-panel"
        >
          <span class="process-card__step">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
