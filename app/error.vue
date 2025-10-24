<template>
  <div class="error-page">
    <div class="container-fluid h-100">
      <div class="row h-100 align-items-center justify-content-center">
        <div class="col-12 text-center">
          <!-- مکعب 404 -->
          <div class="cube-container">
            <div class="cube">
              <div class="face front">404</div>
              <div class="face back">404</div>
              <div class="face right">404</div>
              <div class="face left">404</div>
              <div class="face top">404</div>
              <div class="face bottom">404</div>
            </div>
          </div>
          
          <!-- متن خطا -->
          <div class="error-content mt-5">
            <h1 class="text-white mb-3">صفحه مورد نظر یافت نشد</h1>
            <p class="text-white-50 mb-4">متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
            <button @click="handleGoHome" class="btn btn-light btn-lg">
              بازگشت به صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleGoHome = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-page {
  background: linear-gradient(135deg, #1e3c72 0%, #4f7ed0 100%);
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.cube-container {
  perspective: 800px;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 5rem;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s infinite linear;
}

.face {
  position: absolute;
  width: 150px;
  height: 150px;
  background: #000;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  opacity: 0.9;
}

.front  { transform: rotateY(0deg) translateZ(75px); }
.back   { transform: rotateY(180deg) translateZ(75px); }
.right  { transform: rotateY(90deg) translateZ(75px); }
.left   { transform: rotateY(-90deg) translateZ(75px); }
.top    { transform: rotateX(90deg) translateZ(75px); }
.bottom { transform: rotateX(-90deg) translateZ(75px); }

@keyframes rotate {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to { transform: rotateX(360deg) rotateY(360deg); }
}

.error-content {
  max-width: 500px;
  margin: 0 auto;
}
</style>