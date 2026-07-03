<script setup lang="ts">
import { computed } from 'vue'
import { useSiteProfile } from '../../composables/useSiteProfile'
import { navLinks } from '../../data/site'
import { serviceCategories } from '../../data/services'

const { companyName, contactEmail, phone } = useSiteProfile()
const quickServices = computed(() => serviceCategories.slice(0, 4))
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="shell">
      <div class="site-footer__grid">
        <div class="site-footer__intro card-panel">
          <div class="site-brand site-brand--footer">
            <img src="/logo.png" alt="Frontier Projects logo" class="site-brand__logo site-brand__logo--footer" />
            <span class="site-brand__text">
              <strong>{{ companyName }}</strong>
              <small>Construction & Procurement</small>
            </span>
          </div>
          <p>
            Frontier Projects presents construction, procurement, HSE, consultancy and modular site support through one clear portfolio-style platform.
            Inquiries are reviewed directly by the team so project discussions can continue without unnecessary layers.
          </p>
        </div>

        <div class="site-footer__links card-panel">
          <h3>Pages</h3>
          <ul>
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer__links card-panel">
          <h3>Focus Areas</h3>
          <ul>
            <li v-for="service in quickServices" :key="service.slug">
              <NuxtLink to="/our-services">{{ service.title }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer__links card-panel">
          <h3>Contact</h3>
          <ul class="site-footer__contact">
            <li>
              <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
            </li>
            <li>
              <a :href="`tel:${phone}`">{{ phone }}</a>
            </li>
            <li>Frontier Projects</li>
          </ul>
        </div>
      </div>

      <div class="site-footer__bottom">
        <span>&copy; {{ currentYear }} {{ companyName }}. All rights reserved.</span>
        <span>Production-ready brochure platform with direct inquiry handling.</span>
      </div>
    </div>
  </footer>
</template>
