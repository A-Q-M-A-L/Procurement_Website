<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    list?: string[]
    panelClass?: string
  }>(),
  {
    panelClass: 'card-panel contact-card'
  }
)
</script>

<template>
  <article :class="panelClass">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h3>{{ title }}</h3>
    <p v-if="description">{{ description }}</p>
    <ul v-if="list?.length" class="contact-card__list">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <slot />
  </article>
</template>
