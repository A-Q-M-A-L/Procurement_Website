export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    if (!import.meta.client) return

    const main = document.getElementById('main-content')
    if (!main) return

    // Avoid yanking focus on first paint; only after client navigations.
    if (!nuxtApp.isHydrating) {
      main.focus({ preventScroll: true })
    }
  })
})
