<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteProfile } from '../../composables/useSiteProfile'
import { navLinks } from '../../data/site'

const route = useRoute()
const { companyName } = useSiteProfile()
const isMenuOpen = ref(false)
const menuToggleRef = ref<HTMLButtonElement | null>(null)

const isLinkActive = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path === to || route.path.startsWith(`${to}/`)
}

const closeMenu = async (restoreFocus = false) => {
  if (!isMenuOpen.value) return
  isMenuOpen.value = false
  document.body.classList.remove('nav-open')
  if (restoreFocus) {
    await nextTick()
    menuToggleRef.value?.focus()
  }
}

const openMenu = () => {
  isMenuOpen.value = true
  document.body.classList.add('nav-open')
}

const toggleMenu = () => {
  if (isMenuOpen.value) {
    void closeMenu(true)
  } else {
    openMenu()
  }
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    event.preventDefault()
    void closeMenu(true)
  }
}

watch(
  () => route.path,
  () => {
    void closeMenu(false)
  }
)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('nav-open')
})
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
            :class="{ 'site-nav__link--active': isLinkActive(link.to) }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="site-header__actions">
          <NuxtLink to="/get-a-quote" class="button button--primary button--compact site-header__cta">
            Get a Quote
          </NuxtLink>
          <button
            ref="menuToggleRef"
            type="button"
            class="site-header__menu-toggle"
            :aria-expanded="isMenuOpen ? 'true' : 'false'"
            aria-controls="mobile-menu"
            :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
            @click="toggleMenu"
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
          :class="{ 'site-nav__mobile-link--active': isLinkActive(link.to) }"
          @click="closeMenu(false)"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
