<script setup lang="ts">
withDefaults(
  defineProps<{
    items: Array<{ title: string; description: string }>
    layout?: 'split' | 'page'
  }>(),
  {
    layout: 'split'
  }
)
</script>

<template>
  <div
    class="about-split__cards"
    :class="{ 'about-page-highlights': layout === 'page' }"
  >
    <article v-for="item in items" :key="item.title" class="card-panel about-note">
      <strong>{{ item.title }}</strong>
      <p>{{ item.description }}</p>
    </article>
  </div>
</template>
