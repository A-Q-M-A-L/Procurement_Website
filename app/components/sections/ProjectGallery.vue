<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { PortfolioImage } from '~/data/portfolio'

const props = defineProps<{
  images: PortfolioImage[]
  title?: string
}>()

const activeIndex = ref<number | null>(null)
const dialogRef = ref<HTMLDialogElement | null>(null)

const activeImage = computed(() =>
  activeIndex.value === null ? null : props.images[activeIndex.value] || null
)

const open = (index: number) => {
  activeIndex.value = index
  dialogRef.value?.showModal()
}

const close = () => {
  dialogRef.value?.close()
  activeIndex.value = null
}

const showNext = () => {
  if (activeIndex.value === null || props.images.length < 2) return
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

const showPrev = () => {
  if (activeIndex.value === null || props.images.length < 2) return
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
}

const onKeydown = (event: KeyboardEvent) => {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowRight') showNext()
  if (event.key === 'ArrowLeft') showPrev()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="project-gallery">
    <button
      v-for="(image, index) in images"
      :key="`${image.src}-${index}`"
      type="button"
      class="project-gallery__thumb"
      :aria-label="`Open image: ${image.alt}`"
      @click="open(index)"
    >
      <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async" />
      <span v-if="image.kind !== 'gallery'" class="project-gallery__kind">{{ image.kind }}</span>
    </button>

    <dialog ref="dialogRef" class="project-lightbox" @close="activeIndex = null" @click.self="close">
      <div v-if="activeImage" class="project-lightbox__panel">
        <div class="project-lightbox__toolbar">
          <p>{{ title || activeImage.alt }}</p>
          <button type="button" class="button button--ghost button--compact" @click="close">Close</button>
        </div>
        <img :src="activeImage.src" :alt="activeImage.alt" />
        <div v-if="images.length > 1" class="project-lightbox__nav">
          <button type="button" class="button button--ghost button--compact" @click="showPrev">Previous</button>
          <button type="button" class="button button--ghost button--compact" @click="showNext">Next</button>
        </div>
      </div>
    </dialog>
  </div>
</template>
