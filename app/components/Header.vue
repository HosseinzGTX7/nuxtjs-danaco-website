<template>
  <header class="sticky-top">
    <!-- نوار بالایی -->
    <div class="top-bar">
      <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center px-2 py-2">
          <div class="d-flex align-items-center">
            <div class="logo-container">
              <img src="/images/IMG_20251005_163552_989.png" alt="لوگو داناکو" width="40" height="40" class="logo-img" />
              <span class="fw-bold fs-3 text-primary me-2 logo-text">داناکو</span>
            </div>
          </div>
          
          <!-- دکمه تغییر تم + داشبورد -->
          <div class="d-flex align-items-center gap-3">
            <button
              @click="$emit('toggle-theme')"
              class="btn theme-toggle rounded-pill d-flex align-items-center justify-content-center"
              :title="theme === 'dark' ? 'فعال کردن حالت روشن' : 'فعال کردن حالت تاریک'"
            >
              <i :class="theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'"></i>
            </button>
            <NuxtLink to="/dashboard" class="btn btn-dashboard fw-bold rounded-pill">
              <i class="bi bi-person-circle ms-1"></i> داشبورد
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- نوار ناوبری اصلی -->
    <nav class="navbar main-nav">
      <div class="container-fluid position-relative">
        <div class="d-flex align-items-center justify-content-between w-100">
          <!-- دکمه همبرگری فقط در موبایل -->
          <button
            class="navbar-toggler d-lg-none pt-2 pb-2"
            type="button"
            @click="toggleMenu"
            aria-label="Toggle navigation"
          >
            <div class="hamburger" :class="{ 'active': isMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <!-- لینک‌ها برای دسکتاپ -->
          <div class="desktop-menu d-none d-lg-flex align-items-center w-100">
            <ul class="navbar-nav ms-auto mb-0 d-flex flex-row align-items-center gap-1">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link" exact-active-class="active">
                  <i class="bi bi-house-door ms-1"></i> صفحه اصلی
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/services" class="nav-link" exact-active-class="active">
                  <i class="bi bi-briefcase ms-1"></i> خدمات
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/gallery" class="nav-link" exact-active-class="active">
                  <i class="bi bi-images ms-1"></i> گالری
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/blog" class="nav-link" exact-active-class="active">
                  <i class="bi bi-journal-text ms-1"></i> وبلاگ
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link" exact-active-class="active">
                  <i class="bi bi-telephone ms-1"></i> تماس
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about" class="nav-link" exact-active-class="active">
                  <i class="bi bi-info-circle ms-1"></i> درباره ما
                </NuxtLink>
              </li>
            </ul>

            <div class="contact-info d-flex align-items-center ms-4">
              <span class="fw-bold">0912-***-****</span>
              <i class="bi bi-telephone-inbound me-2"></i>
            </div>
          </div>
        </div>

        <!-- منوی موبایل -->
        <transition name="menu-slide">
          <div v-show="isMenuOpen" class="mobile-menu d-lg-none mt-2">
            <div class="mobile-menu-content">
              <ul class="navbar-nav py-3 px-3 mb-0">
                <li class="nav-item">
                  <NuxtLink to="/" class="nav-link" exact-active-class="active" @click="closeMenu">
                    <i class="bi bi-house-door ms-2"></i> صفحه اصلی
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/services" class="nav-link" exact-active-class="active" @click="closeMenu">
                    <i class="bi bi-briefcase ms-2"></i> خدمات
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/gallery" class="nav-link" exact-active-class="active" @click="closeMenu">
                    <i class="bi bi-images ms-2"></i> گالری
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/blog" class="nav-link" exact-active-class="active" @click="closeMenu">
                    <i class="bi bi-journal-text ms-2"></i> وبلاگ
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/contact" class="nav-link" exact-active-class="active" @click="closeMenu">
                    <i class="bi bi-telephone ms-2"></i> تماس
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/about" class="nav-link" exact-active-class="active" @click="closeMenu">
                    <i class="bi bi-info-circle ms-2"></i> درباره ما
                  </NuxtLink>
                </li>
              </ul>

              <div class="mobile-contact px-3 py-3">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="fw-bold">0912-123-4567</span>
                  <i class="bi bi-telephone-inbound me-2"></i>
                </div>
              </div>
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
/* نوار بالایی */
.top-bar {
  background-color: var(--header-top-bg);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}

.logo-container {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: translateY(-2px);
}

.logo-img {
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.logo-img:hover {
  transform: rotate(5deg) scale(1.05);
}

.logo-text {
  background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* دکمه تغییر تم */
.theme-toggle {
  width: 44px;
  height: 44px;
  background: rgba(255,255,255,0.8);
  border: 1px solid rgba(0,0,0,0.1);
  color: #6c757d;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.theme-toggle:hover {
  background: white;
  color: #495057;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* دکمه داشبورد */
.btn-dashboard {
  background: linear-gradient(135deg, #9f15fc 0%, #0a58ca 100%);
  border: none;
  padding: 0.5rem 1.25rem;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(13, 110, 253, 0.25);
}

.btn-dashboard:hover {
  background: linear-gradient(135deg, #7b13c1 0%, #084298 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(13, 110, 253, 0.3);
  color: white;
}

/* نوار ناوبری اصلی */
.main-nav {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  position: relative;
}

/* دکمه همبرگر مدرن */
.hamburger {
  display: flex;
  flex-direction: column;
  width: 24px;
  height: 18px;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* لینک‌های ناوبری دسکتاپ */
.desktop-menu .nav-link {
  color: rgba(255,255,255,0.85) !important;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  font-weight: 500;
}

.desktop-menu .nav-link:hover {
  color: white !important;
  background: rgba(255,255,255,0.15);
  transform: translateY(-2px);
}

.desktop-menu .nav-link.active {
  color: white !important;
  background: rgba(255,255,255,0.2);
  font-weight: 600;
}

.desktop-menu .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: white;
  border-radius: 2px;
}

/* اطلاعات تماس */
.contact-info {
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.contact-info:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

/* منوی موبایل - اصلاح شده */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  border-top: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
}

.mobile-menu-content {
  width: 100%;
}

.mobile-menu .nav-link {
  color: rgba(255,255,255,0.9) !important;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background: transparent;
}

.mobile-menu .nav-link:hover {
  color: white !important;
  background: rgba(255,255,255,0.1);
  padding-right: 1.5rem;
}

.mobile-menu .nav-link.active {
  color: white !important;
  background: rgba(255,255,255,0.15);
  font-weight: 600;
}

.mobile-contact {
  border-top: 1px solid rgba(255,255,255,0.1);
  color: white;
  background: rgba(0,0,0,0.1);
}

/* انیمیشن منوی موبایل - اصلاح شده */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-slide-enter-from {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.menu-slide-enter-to {
  max-height: 400px;
  opacity: 1;
  transform: translateY(0);
}

.menu-slide-leave-from {
  max-height: 400px;
  opacity: 1;
  transform: translateY(0);
}

.menu-slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

/* حالت تاریک */
:global(.dark) .top-bar {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

:global(.dark) .theme-toggle {
  background: rgba(255,255,255,0.1);
  color: #adb5bd;
  border: 1px solid rgba(255,255,255,0.1);
}

:global(.dark) .theme-toggle:hover {
  background: rgba(255,255,255,0.15);
  color: white;
}

/* رسپانسیو */
@media (max-width: 991.98px) {
  .desktop-menu .navbar-nav {
    gap: 0.5rem;
  }
  
  .desktop-menu .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 767.98px) {
  .top-bar .container-fluid > div {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .logo-text {
    font-size: 1.5rem !important;
  }
  
  .mobile-menu {
    border-radius: 0 0 12px 12px;
  }
}

</style>