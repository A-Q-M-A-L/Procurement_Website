<script setup lang="ts">
import { whyChooseUs } from '~/data/site'

defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section class="section-block section-block--muted">
    <div class="shell why-choose">
      <div class="section-intro">
        <p class="eyebrow">Why Choose Us</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>

      <div class="why-choose__layout">
        <div class="why-choose__visual card-panel">
          <div class="why-choose__accent"></div>
          <div class="why-choose__blueprint">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="why-choose__copy">
            <strong>Execution and procurement under one workflow</strong>
            <p>Construction, sourcing, HSE and modular site support are coordinated through one direct communication path instead of disconnected vendors.</p>
          </div>
        </div>

        <div class="why-choose__grid">
          <article v-for="point in whyChooseUs" :key="point.title" class="why-card card-panel">
            <h3>{{ point.title }}</h3>
            <p>{{ point.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
