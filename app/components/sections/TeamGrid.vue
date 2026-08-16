<script setup lang="ts">
import SectionIntro from './SectionIntro.vue'
import type { TeamMember } from '~/data/team'

withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    description?: string
    members: TeamMember[]
    muted?: boolean
  }>(),
  {
    eyebrow: 'Leadership',
    title: 'Team focused on delivery and coordination',
    description:
      'The leadership team focuses on clear client communication, site coordination and procurement follow-through across active project scopes.',
    muted: true
  }
)
</script>

<template>
  <section class="section-block" :class="{ 'section-block--muted': muted }">
    <div class="shell">
      <SectionIntro :eyebrow="eyebrow" :title="title" :description="description" />

      <div class="team-grid">
        <article v-for="member in members" :key="member.id" class="team-card card-panel">
          <img :src="member.photo" :alt="`${member.name} portrait`" loading="lazy" decoding="async" />
          <div>
            <h3>{{ member.name }}</h3>
            <p class="team-card__role">{{ member.role }}</p>
            <p>{{ member.bio }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
