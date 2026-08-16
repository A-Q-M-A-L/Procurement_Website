<script setup lang="ts">
import { certifications } from '~/data/certifications'

defineProps<{
  compact?: boolean
}>()
</script>

<template>
  <div class="cert-badges" :class="{ 'cert-badges--compact': compact }">
    <article v-for="item in certifications" :key="item.id" class="cert-badge">
      <strong>{{ item.label }}</strong>
      <p v-if="!compact">{{ item.description }}</p>
      <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer">View certificate</a>
    </article>
  </div>
</template>
