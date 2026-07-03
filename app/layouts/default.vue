<script setup lang="ts">
import SiteFooter from '../components/site/SiteFooter.vue'
import SiteHeader from '../components/site/SiteHeader.vue'
</script>

<template>
  <div class="site-frame">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <SiteHeader />
    <main id="main-content" class="site-main" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
