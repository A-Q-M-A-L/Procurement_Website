<script setup lang="ts">
import { useSiteProfile } from '../../composables/useSiteProfile'

const { whatsappUrl } = useSiteProfile()
</script>

<template>
  <a
    class="whatsapp-fab"
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Frontier Projects on WhatsApp"
  >
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.04 3C9.4 3 4 8.36 4 14.96c0 2.1.55 4.15 1.6 5.96L4 29l8.3-1.72a12.1 12.1 0 0 0 3.74.58h.01c6.64 0 12.04-5.36 12.04-11.96C28.09 8.36 22.68 3 16.04 3zm0 21.8h-.01a10 10 0 0 1-5.1-1.4l-.36-.21-4.93 1.02 1.05-4.8-.24-.39a9.9 9.9 0 0 1-1.52-5.26c0-5.47 4.48-9.92 10-9.92s10 4.45 10 9.92-4.48 9.92-9.89 9.92zm5.45-7.43c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
      />
    </svg>
    <span class="whatsapp-fab__label">WhatsApp</span>
  </a>
</template>
