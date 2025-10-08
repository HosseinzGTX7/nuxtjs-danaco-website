<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import { useHead } from '#imports'

useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
      defer: true
    }
  ]
})
</script>