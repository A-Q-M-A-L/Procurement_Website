<script setup lang="ts">
import type { ServiceCategory } from '~/data/services'

defineProps<{
  title: string
  description: string
  services: ServiceCategory[]
}>()
</script>

<template>
  <section class="section-block">
    <div class="shell">
      <div class="section-intro">
        <p class="eyebrow">Services</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>

      <div class="service-grid">
        <article v-for="(service, index) in services" :key="service.slug" class="service-card card-panel">
          <div class="service-card__code">{{ String(index + 1).padStart(2, '0') }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.summary }}</p>
          <ul>
            <li v-for="item in service.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
