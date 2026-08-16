<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SectionIntro from './SectionIntro.vue'
import { testimonials } from '~/data/testimonials'

defineProps<{
  title: string
  description: string
}>()

const active = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const stars = (rating: number) => '★'.repeat(rating) + '☆'.repeat(Math.max(0, 5 - rating))

const goTo = (index: number) => {
  active.value = (index + testimonials.length) % testimonials.length
}

const next = () => goTo(active.value + 1)
const prev = () => goTo(active.value - 1)

const visible = computed(() => {
  const first = testimonials[active.value]
  const second = testimonials[(active.value + 1) % testimonials.length]
  return [first, second]
})

onMounted(() => {
  timer = setInterval(next, 7000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="section-block section-block--muted">
    <div class="shell">
      <SectionIntro
        eyebrow="Client Feedback"
        :title="title"
        :description="description"
        variant="with-action"
      >
        <div class="testimonials__controls">
          <button type="button" class="button button--ghost button--compact" aria-label="Previous testimonials" @click="prev">
            Prev
          </button>
          <button type="button" class="button button--ghost button--compact" aria-label="Next testimonials" @click="next">
            Next
          </button>
        </div>
      </SectionIntro>

      <div class="testimonials-grid">
        <article v-for="item in visible" :key="item.id" class="testimonial-card card-panel">
          <div class="testimonial-card__rating" :aria-label="`${item.rating} out of 5 stars`">
            {{ stars(item.rating) }}
          </div>
          <blockquote>{{ item.quote }}</blockquote>
          <div class="testimonial-card__meta">
            <strong>{{ item.name }}</strong>
            <span>{{ item.projectType }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
