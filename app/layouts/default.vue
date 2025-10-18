<template>
  <div class="min-vh-100">
    <Header :theme="themeValue" @toggle-theme="toggleTheme" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import { useCookie, watch, computed, onMounted } from '#imports'

useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
      defer: true
    }
  ]
})

const themeCookie = useCookie('theme', { default: () => 'light' })

const themeValue = computed(() => themeCookie.value)

function toggleTheme() {
  themeCookie.value = themeCookie.value === 'light' ? 'dark' : 'light'
}

// آپدیت attribute روی html برای bootstrap
onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', themeCookie.value)
})

watch(themeCookie, (val) => {
  if (process.client) {
    document.documentElement.setAttribute('data-bs-theme', val)
  }
})
</script>