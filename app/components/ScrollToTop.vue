<template>
  <button
    v-show="visible"
    class="scroll-to-top position-fixed d-flex align-items-center justify-content-center"
    @click="scrollToTop"
    aria-label="بازگشت به بالا"
    :title="'بازگشت به بالا'"
  >
    <!-- SVG دایره پر شونده (نمایش فقط، pointer-events غیرفعال شده) -->
    <svg class="progress-ring" viewBox="0 0 50 50" width="50" height="50" aria-hidden="true">
      <circle
        ref="circleRef"
        class="progress-ring__circle"
        :r="R"
        :cx="25"
        :cy="25"
        :stroke-width="strokeWidth"
        fill="transparent"
        :style="circleStyle"
      />
    </svg>

    <i class="bi bi-arrow-up-short position-absolute fs-3"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const visible = ref(false)
const scrollProgress = ref(0) // 0..100

// تنظیمات دایره
const R = 20 // radius
const strokeWidth = 3
const circumference = 2 * Math.PI * R

const circleRef = ref(null)
const threshold = 300 // پیکسل برای نمایش دکمه (قابل تغییر)

// محاسبه استایل دایره (dasharray, dashoffset)
const circleStyle = computed(() => {
  const offset = circumference * (1 - scrollProgress.value / 100)
  return {
    strokeDasharray: `${circumference}`,
    strokeDashoffset: `${offset}px`,
    transition: 'stroke-dashoffset 150ms linear'
  }
})

function updateScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  scrollProgress.value = Math.max(0, Math.min(100, progress))
  visible.value = scrollTop > threshold
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
  window.addEventListener('resize', updateScroll)

  // وقتی مودال باز یا بسته می‌شود
  document.addEventListener('show.bs.modal', () => (visible.value = false))
  document.addEventListener('hidden.bs.modal', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('resize', updateScroll)
  document.removeEventListener('show.bs.modal', () => (visible.value = false))
  document.removeEventListener('hidden.bs.modal', updateScroll)
})

</script>

<style scoped>
.scroll-to-top {
  bottom: 1.8rem;
  left: 1.8rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #cbcaca;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  cursor: pointer;
  z-index: 1080;
  transition: opacity 0.25s ease, transform 0.2s ease;
  padding: 0;
  position: fixed;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* کوچکتر/نرمال شدن دکمه هنگام نمایان شدن/پنهان شدن */
.scroll-to-top[v-cloak] { display: none; }
.scroll-to-top[style*="display: none"] { opacity: 0; transform: translateY(6px); pointer-events: none; }

/* آیکون داخل دکمه */
.scroll-to-top .bi {
  color: var(--bs-primary);
  pointer-events: none; /* اجازه بده کلیک به دکمه برسه */
}

/* svg فقط نمایشی باشه، مانع کلیک نشه */
.progress-ring {
  position: relative;
  transform: rotate(-90deg);
  pointer-events: none;
}

/* دایره زمینه (می‌تونید رنگش رو کم‌رنگ کنید) */
.progress-ring__circle {
  stroke: var(--bs-primary);
  stroke-linecap: round;
}

.scroll-to-top:hover {
  transform: scale(1.06);
}
</style>