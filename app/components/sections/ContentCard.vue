<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    description?: string
    titleTag?: 'h2' | 'h3'
    panelClass?: string
  }>(),
  {
    titleTag: 'h2',
    panelClass: 'card-panel'
  }
)
</script>

<template>
  <article :class="panelClass">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <component :is="titleTag" v-if="title">{{ title }}</component>
    <p v-if="description">{{ description }}</p>
    <slot />
  </article>
</template>
