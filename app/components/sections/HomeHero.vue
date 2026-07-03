<script setup lang="ts">
import { heroPoints, siteCopy } from '~/data/site'

const { companyName } = useSiteProfile()
</script>

<template>
  <section class="hero-section">
    <div class="shell hero-section__grid">
      <div class="hero-section__content">
        <p class="eyebrow">{{ siteCopy.heroEyebrow }}</p>
        <h1>{{ siteCopy.heroTitle }}</h1>
        <p class="lead">{{ siteCopy.heroDescription }}</p>

        <div class="hero-section__actions">
          <NuxtLink to="/get-a-quote" class="button button--primary">Get a Quote</NuxtLink>
          <NuxtLink to="/our-services" class="button button--ghost">Explore Services</NuxtLink>
        </div>

        <ul class="hero-section__points">
          <li v-for="point in heroPoints" :key="point">{{ point }}</li>
        </ul>
      </div>

      <div class="hero-visual card-panel">
        <div class="hero-visual__frame">
          <div class="hero-visual__tower hero-visual__tower--left"></div>
          <div class="hero-visual__tower hero-visual__tower--center"></div>
          <div class="hero-visual__tower hero-visual__tower--right"></div>
          <div class="hero-visual__crane"></div>
        </div>

        <div class="hero-visual__cards">
          <article class="hero-mini-card">
            <span class="hero-mini-card__label">Company</span>
            <strong>{{ companyName }}</strong>
            <p>Construction execution, procurement support and project coordination for practical delivery.</p>
          </article>
          <article class="hero-mini-card">
            <span class="hero-mini-card__label">Response Model</span>
            <strong>Direct Follow-Up</strong>
            <p>Website inquiry first, then direct discussion by email or phone with the Frontier Projects team.</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
