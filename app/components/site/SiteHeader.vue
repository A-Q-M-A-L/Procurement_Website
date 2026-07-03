<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteProfile } from '../../composables/useSiteProfile'
import { navLinks } from '../../data/site'

const route = useRoute()
const { companyName } = useSiteProfile()
const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(
  () => route.path,
  () => {
    closeMenu()
  }
)
</script>

<template>
  <header class="site-header">
    <div class="shell">
      <div class="site-header__bar">
        <NuxtLink to="/" class="site-brand" aria-label="Frontier Projects home">
          <img src="/logo.png" alt="Frontier Projects logo" class="site-brand__logo" />
          <span class="site-brand__text">
            <strong>{{ companyName }}</strong>
            <small>Construction & Procurement</small>
          </span>
        </NuxtLink>

        <nav class="site-nav site-nav--desktop" aria-label="Primary">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="site-nav__link"
            :class="{ 'site-nav__link--active': route.path === link.to }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="site-header__actions">
          <NuxtLink to="/get-a-quote" class="button button--primary button--compact">
            Get a Quote
          </NuxtLink>
          <button
            type="button"
            class="site-header__menu-toggle"
            :aria-expanded="isMenuOpen ? 'true' : 'false'"
            aria-controls="mobile-menu"
            :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav
        v-if="isMenuOpen"
        id="mobile-menu"
        class="site-nav site-nav--mobile"
        aria-label="Mobile primary"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="site-nav__mobile-link"
          :class="{ 'site-nav__mobile-link--active': route.path === link.to }"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
