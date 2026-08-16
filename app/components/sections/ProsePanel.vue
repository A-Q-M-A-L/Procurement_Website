<script setup lang="ts">
withDefaults(
  defineProps<{
    muted?: boolean
  }>(),
  {
    muted: false
  }
)
</script>

<template>
  <section class="section-block" :class="{ 'section-block--muted': muted }">
    <div class="shell prose-panel card-panel">
      <slot />
    </div>
  </section>
</template>
