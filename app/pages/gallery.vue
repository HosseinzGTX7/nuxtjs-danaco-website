<template>
  <section class="container my-5">

    <div class="d-flex align-items-center mb-4">
      <i class="bi bi-images fs-2 text-primary ms-2"></i>
      <h2 class="fw-bold mb-0">تور مجازی / گالری</h2>
    </div>

    <!-- دسته‌بندی‌ها -->
    <ul class="nav nav-pills justify-content-center mb-5 flex-wrap">
      <li class="nav-item" v-for="cat in categories" :key="cat">
        <button
          class="nav-link"
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </li>
    </ul>

    <!-- لیست گالری -->
    <transition-group name="fade" tag="div" class="row g-4">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="item in filteredGallery"
        :key="item.title"
      >
        <div class="position-relative overflow-hidden rounded shadow-sm gallery-card">
          <img :src="item.image" class="w-100 h-100 gallery-img" :alt="item.title" />
          <div
            class="position-absolute bottom-0 start-0 w-100 p-2 text-white"
            style="background: rgba(0, 0, 0, 0.5);"
          >
            <h5 class="mb-0">{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </transition-group>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGalleryStore } from '~/stores/useGallery'

const galleryStore = useGalleryStore()

const selectedCategory = ref('همه')

// گرفتن دسته‌بندی‌ها از getter استور
const categories = computed(() => galleryStore.categories)

// آیتم‌های فیلترشده از getter استور
const filteredGallery = computed(() => galleryStore.itemsByCategory(selectedCategory.value))
</script>

<style scoped>
.gallery-card {
  height: 250px;
}
.gallery-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

/* انیمیشن fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>
