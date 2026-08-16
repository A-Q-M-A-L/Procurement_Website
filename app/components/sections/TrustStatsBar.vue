<script setup lang="ts">
import { trustStats } from '~/data/trustStats'
</script>

<template>
  <section class="trust-stats" aria-label="Frontier Projects highlights">
    <div class="shell">
      <div class="trust-stats__grid">
        <article v-for="stat in trustStats" :key="stat.id" class="trust-stats__item">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
