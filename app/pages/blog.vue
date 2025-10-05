<template>
  <section class="container my-5">

    <div class="d-flex align-items-center mb-4">
      <i class="bi bi-journal-text fs-2 text-primary ms-2"></i>
      <h2 class="fw-bold mb-0">وبلاگ‌ها</h2>
    </div>

    <ul class="nav nav-pills justify-content-center mb-5 flex-wrap">
      <li class="nav-item"><a class="nav-link active" href="#">همه</a></li>
      <li class="nav-item"><a class="nav-link" href="#">ترفندهای تربیتی</a></li>
      <li class="nav-item"><a class="nav-link" href="#">بازی‌های آموزشی</a></li>
      <li class="nav-item"><a class="nav-link" href="#">اخبار / رویدادها</a></li>
    </ul>

    <!-- لیست مقالات -->
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="article in articles" :key="article.slug">
        <div class="card h-100 shadow-sm">
          <img :src="article.image" class="card-img-top" :alt="article.title">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ article.title }}</h5>
            <p class="card-text text-muted">{{ article.summary }}</p>
            <!-- لینک به صفحه داینامیک مقاله -->
            <NuxtLink :to="`/blog/${article.slug}`" class="btn btn-primary">ادامه مطلب</NuxtLink>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import articles from '~/data/articles.js'
</script>
