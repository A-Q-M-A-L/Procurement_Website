<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    variant?: 'default' | 'left' | 'centered' | 'with-action'
  }>(),
  {
    variant: 'default'
  }
)
</script>

<template>
  <div
    class="section-intro"
    :class="{
      'section-intro--left': variant === 'left',
      'section-intro--centered': variant === 'centered',
      'section-intro--with-action': variant === 'with-action'
    }"
  >
    <template v-if="variant === 'with-action'">
      <div>
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h2>{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
      </div>
      <slot />
    </template>
    <template v-else>
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
      <slot />
    </template>
  </div>
</template>
