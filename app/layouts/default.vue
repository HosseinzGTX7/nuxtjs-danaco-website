<template>
  <div class="min-vh-100">
    <template v-if="error && error.statusCode === 404">
      <!-- برای خطای 404 صفحه اختصاصی نمایش داده می‌شود -->
      <NuxtPage />
    </template>
    <template v-else-if="error">
      <!-- برای سایر خطاها کامپوننت ErrorHandler نمایش داده می‌شود -->
      <ErrorHandler :error="error" />
    </template>
    <template v-else>
      <!-- حالت عادی بدون خطا -->
      <Header :theme="themeValue" @toggle-theme="toggleTheme" />
      <NuxtPage />
      <Footer />
    </template>
  </div>
  <ScrollToTop />
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ScrollToTop from '~/components/ScrollToTop.vue'
import ErrorHandler from '~/components/ErrorHandler.vue'
import { useCookie, watch, computed, onMounted } from '#imports'

const error = useError()

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