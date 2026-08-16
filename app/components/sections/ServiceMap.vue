<script setup lang="ts">
import { useSiteProfile } from '../../composables/useSiteProfile'

const props = defineProps<{
  title?: string
  description?: string
}>()

const { mapEmbedUrl, officeAddress } = useSiteProfile()
</script>

<template>
  <article class="card-panel map-embed">
    <p class="eyebrow">Location</p>
    <h3>{{ title || 'Office location' }}</h3>
    <p>{{ description || officeAddress }}</p>
    <div class="map-embed__frame">
      <iframe
        :src="mapEmbedUrl"
        title="Frontier Projects office location map"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>
  </article>
</template>
