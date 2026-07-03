<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section class="section-block">
    <div class="shell">
      <div class="cta-band card-panel">
        <div>
          <p class="eyebrow">Next Step</p>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
        <div class="cta-band__actions">
          <NuxtLink to="/get-a-quote" class="button button--primary">Request a Quote</NuxtLink>
          <NuxtLink to="/our-services" class="button button--ghost">Review Services</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
