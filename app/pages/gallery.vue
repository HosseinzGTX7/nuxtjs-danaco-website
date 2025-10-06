<template>
  <section class="container my-5">

    <div class="d-flex align-items-center mb-4">
      <i class="bi bi-images fs-2 text-primary ms-2"></i>
      <h2 class="fw-bold mb-0">تور مجازی / گالری</h2>
    </div>

    <ul class="nav nav-pills justify-content-center mb-5 flex-wrap">
      <li class="nav-item">
        <a class="nav-link active" href="#">همه</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">کارگاه</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">فضای بازی</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">سرسره‌ها</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">کتابخانه</a>
      </li>
    </ul>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="(item, index) in galleryItems" :key="index">
        <div class="position-relative overflow-hidden rounded shadow-sm gallery-card">
          <img :src="item.image" class="w-100 h-100 gallery-img" :alt="item.title">
          <div class="position-absolute bottom-0 start-0 w-100 p-2 text-white" 
               style="background: rgba(0, 0, 0, 0.5);">
            <h5 class="mb-0">{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const galleryItems = [
  { title: 'کتابخانه جذاب', image: '/images/IMG_20251005_131532_142.webp' },
  { title: 'قطار بازی', image: '/images/IMG_20251005_131532_081.webp' },
  { title: 'کارگاه نقاشی', image: '/images/IMG_20251005_131532_516.webp' },
  { title: 'استخر توپ', image: '/images/IMG_20251005_131531_954.webp' },
  { title: 'فضای بازی آزاد', image: '/images/IMG_20251005_163553_023.webp' },
  { title: 'سرسره های رنگی', image: '/images/IMG_20251005_163553_056.webp' },
  { title: 'وسایل بازی', image: '/images/IMG_20251005_131532_495.webp' },
]
</script>

<style scoped>
.gallery-card {
  height: 250px; /* ارتفاع ثابت برای همه خانه‌ها */
}

.gallery-img {
  object-fit: cover; /* عکس کامل پوشش بده */
  height: 100%;      /* پر کردن ارتفاع کارت */
  width: 100%;
}
</style>
