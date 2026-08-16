<script setup lang="ts">
import { computed } from 'vue'
import BeforeAfterSlider from './BeforeAfterSlider.vue'
import ProjectGallery from './ProjectGallery.vue'
import SectionIntro from './SectionIntro.vue'
import type { PortfolioItem } from '~/data/portfolio'

const props = defineProps<{
  title: string
  description: string
  projects: PortfolioItem[]
  showViewAll?: boolean
  showFilters?: boolean
  activeCategory?: string
  compact?: boolean
}>()

const emit = defineEmits<{
  'update:activeCategory': [value: string]
}>()

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Modular']

const coverImage = (project: PortfolioItem) =>
  project.images.find((image) => image.kind === 'after') ||
  project.images.find((image) => image.kind === 'gallery') ||
  project.images[0]

const beforeAfterPair = (project: PortfolioItem) => {
  const before = project.images.find((image) => image.kind === 'before')
  const after = project.images.find((image) => image.kind === 'after')
  if (!before || !after) return null
  return { before, after }
}

const filteredProjects = computed(() => {
  if (!props.showFilters || !props.activeCategory || props.activeCategory === 'All') {
    return props.projects
  }
  return props.projects.filter((project) => project.category === props.activeCategory)
})
</script>

<template>
  <section class="section-block">
    <div class="shell">
      <SectionIntro
        eyebrow="Portfolio"
        :title="title"
        :description="description"
        variant="with-action"
      >
        <NuxtLink v-if="showViewAll" to="/portfolio" class="button button--ghost">View Full Portfolio</NuxtLink>
      </SectionIntro>

      <div v-if="showFilters" class="portfolio-filters" role="tablist" aria-label="Portfolio categories">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="portfolio-filters__chip"
          :class="{ 'portfolio-filters__chip--active': (activeCategory || 'All') === category }"
          role="tab"
          :aria-selected="(activeCategory || 'All') === category ? 'true' : 'false'"
          @click="emit('update:activeCategory', category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="portfolio-grid">
        <article v-for="project in filteredProjects" :key="project.slug" class="project-card card-panel">
          <div class="project-card__visual project-card__visual--photo">
            <img
              v-if="coverImage(project)"
              :src="coverImage(project)!.src"
              :alt="coverImage(project)!.alt"
              loading="lazy"
              decoding="async"
            />
            <span class="project-card__badge">{{ project.category }}</span>
          </div>

          <div class="project-card__body">
            <div class="project-card__meta">{{ project.location }} · {{ project.projectType }}</div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <ul>
              <li v-for="item in project.scope" :key="item">{{ item }}</li>
            </ul>
            <div class="project-card__outcome">
              <strong>Typical outcome</strong>
              <p>{{ project.outcome }}</p>
            </div>

            <BeforeAfterSlider
              v-if="!compact && project.showBeforeAfter && beforeAfterPair(project)"
              :before="beforeAfterPair(project)!.before"
              :after="beforeAfterPair(project)!.after"
            />

            <ProjectGallery
              v-if="project.images.length"
              :images="compact ? project.images.slice(0, 3) : project.images"
              :title="project.title"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
