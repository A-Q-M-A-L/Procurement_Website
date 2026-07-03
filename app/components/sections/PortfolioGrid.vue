<script setup lang="ts">
import type { PortfolioItem } from '~/data/portfolio'

const props = defineProps<{
  title: string
  description: string
  projects: PortfolioItem[]
  showViewAll?: boolean
}>()

const visualStyle = (category: string) => {
  const styles: Record<string, string> = {
    Residential: 'linear-gradient(135deg, rgba(217, 119, 6, 0.16), rgba(17, 24, 39, 0.95))',
    Commercial: 'linear-gradient(135deg, rgba(15, 118, 110, 0.2), rgba(17, 24, 39, 0.95))',
    Modular: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(17, 24, 39, 0.95))',
    Procurement: 'linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(17, 24, 39, 0.95))'
  }

  return {
    background: styles[category] || 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(17, 24, 39, 0.95))'
  }
}

const initials = (title: string) =>
  title
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase()
</script>

<template>
  <section class="section-block">
    <div class="shell">
      <div class="section-intro section-intro--with-action">
        <div>
          <p class="eyebrow">Portfolio</p>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
        <NuxtLink v-if="showViewAll" to="/portfolio" class="button button--ghost">View Full Portfolio</NuxtLink>
      </div>

      <div class="portfolio-grid">
        <article v-for="project in projects" :key="project.slug" class="project-card card-panel">
          <div class="project-card__visual" :style="visualStyle(project.category)">
            <span class="project-card__badge">{{ project.category }}</span>
            <span class="project-card__initials">{{ initials(project.title) }}</span>
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
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
