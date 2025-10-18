<template>
  <header>
    <div class="d-flex justify-content-between align-items-center px-4 py-2 top-bar">
      <div class="d-flex align-items-center">
        <img src="/images/IMG_20251005_163552_989.png" alt="لوگو" width="40" height="40" class="me-2" />
        <span class="fw-bold fs-3 text-primary">داناکو</span>
      </div>
      
       <!-- دکمه تغییر تم + داشبورد -->
      <div class="d-flex align-items-center gap-2">
        <button
          @click="$emit('toggle-theme')"
          class="btn btn-outline-secondary rounded-pill d-flex align-items-center gap-1"
          title="تغییر حالت روشن/تاریک"
        >
          <i :class="theme === 'dark' ? 'bi bi-moon-fill text-warning' : 'bi bi-sun-fill text-dark'"></i>
        </button>
      <NuxtLink to="/dashboard" class="btn btn-primary fw-bold rounded-pill">داشبورد</NuxtLink>
      </div>
    </div>

    <nav class="navbar navbar-dark main-nav px-4">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <a class="navbar-brand d-lg-none" href="#">منو</a>

        <!-- دکمه همبرگری فقط در موبایل نمایش داده می‌شود -->
        <button
          class="navbar-toggler border-0 d-lg-none"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <svg
            width="28"
            height="28"
            viewBox="1 0 24 24"
            :class="{ open: isMenuOpen }"
          >
            <path class="line top" d="M5 7h14"></path>
            <path class="line middle" d="M5 12h14"></path>
            <path class="line bottom" d="M5 17h14"></path>
          </svg>
        </button>

        <!-- لینک‌ها برای دسکتاپ (نمایش از lg به بالا) -->
        <div class="desktop-menu d-none d-lg-flex align-items-center w-100">
          <ul class="navbar-nav ms-auto mb-0 d-flex flex-row align-items-center gap-3">
            <li class="nav-item"><NuxtLink to="/" class="nav-link" exact-active-class="active">صفحه اصلی</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/services" class="nav-link" exact-active-class="active">خدمات</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/gallery" class="nav-link" exact-active-class="active">گالری</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/blog" class="nav-link" exact-active-class="active">وبلاگ</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/contact" class="nav-link" exact-active-class="active">تماس</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/about" class="nav-link" exact-active-class="active">درباره ما</NuxtLink></li>
          </ul>

          <span class="text-dark fw-bold p-1 ms-3">
            0912-123-4567 <i class="bi bi-telephone-inbound"></i>
          </span>
        </div>

        <!-- لینک‌ها برای موبایل -->
        <transition name="menu-slide">
          <div v-show="isMenuOpen" class="mobile-menu d-lg-none w-100">
            <ul class="navbar-nav py-2 px-3 mb-0">
              <li class="nav-item"><NuxtLink to="/" class="nav-link" exact-active-class="active" @click="closeMenu">صفحه اصلی</NuxtLink></li>
              <li class="nav-item"><NuxtLink to="/services" class="nav-link" exact-active-class="active" @click="closeMenu">خدمات</NuxtLink></li>
              <li class="nav-item"><NuxtLink to="/gallery" class="nav-link" exact-active-class="active" @click="closeMenu">گالری</NuxtLink></li>
              <li class="nav-item"><NuxtLink to="/blog" class="nav-link" exact-active-class="active" @click="closeMenu">وبلاگ</NuxtLink></li>
              <li class="nav-item"><NuxtLink to="/contact" class="nav-link" exact-active-class="active" @click="closeMenu">تماس</NuxtLink></li>
              <li class="nav-item"><NuxtLink to="/about" class="nav-link" exact-active-class="active" @click="closeMenu">درباره ما</NuxtLink></li>
            </ul>

            <div class="px-3 pb-3">
              <span class="text-dark fw-bold">0912-123-4567 <i class="bi bi-telephone-inbound"></i></span>
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

//light and dark mode
defineProps({
  theme: String
})
defineEmits(['toggle-theme'])

const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)

// وقتی لینک موبایل زده شد منو بسته شود
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.top-bar {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.main-nav {
  background-color: #a3a3a3;
}

/* لینک‌ها */
.nav-link {
  color: #e4e3e3 !important;
  transition: 0.15s;
}
.nav-link:hover {
  color: #000 !important;
  transition: 0.65s;
}

/* آیکون همبرگر */
.navbar-toggler svg {
  cursor: pointer;
  transition: all 0.4s ease;
}

/* خطوط همبرگری */
.line {
  fill: none;
  stroke: white;
  stroke-width: 2.5;
  stroke-linecap: round;
  transition: transform 0.4s ease, opacity 0.4s ease;
  transform-origin: 12px 12px;
}

svg.open .top {
  transform: rotate(45deg) translate(2px, 3px);
}
svg.open .middle {
  opacity: 0;
}
svg.open .bottom {
  transform: rotate(-45deg) translate(2px, -3px);
}

/* انیمیشن منوی موبایل */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: max-height 0.65s ease, opacity 0.45s ease, padding 0.45s ease;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
}
.menu-slide-enter-to,
.menu-slide-leave-from {
  max-height: 1000px;
  opacity: 1;
}

/* نمایش داخلی دسکتاپ: آیتم‌ها کنار هم */
.desktop-menu .navbar-nav .nav-item .nav-link {
  padding: 0.5rem 0.75rem;
}

/* موبایل: آرایش عمودی */
.mobile-menu .nav-link {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
</style>
