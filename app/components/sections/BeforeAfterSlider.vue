<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PortfolioImage } from '~/data/portfolio'

const props = defineProps<{
  before: PortfolioImage
  after: PortfolioImage
}>()

const position = ref(50)
const afterClip = computed(() => `inset(0 0 0 ${position.value}%)`)
</script>

<template>
  <div class="before-after">
    <div class="before-after__frame">
      <img :src="before.src" :alt="before.alt" loading="lazy" decoding="async" class="before-after__image" />
      <img
        :src="after.src"
        :alt="after.alt"
        loading="lazy"
        decoding="async"
        class="before-after__image before-after__image--after"
        :style="{ clipPath: afterClip }"
      />
      <div class="before-after__divider" :style="{ left: `${position}%` }" aria-hidden="true"></div>
      <span class="before-after__label before-after__label--before">Before</span>
      <span class="before-after__label before-after__label--after">After</span>
    </div>
    <label class="before-after__control">
      <span class="visually-hidden">Compare before and after</span>
      <input v-model.number="position" type="range" min="0" max="100" />
    </label>
  </div>
</template>
