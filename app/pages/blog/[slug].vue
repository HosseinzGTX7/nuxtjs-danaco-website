<template>
  <section class="container my-5">
    <div v-if="article">
      <!-- عنوان و تصویر مقاله -->
      <div class="mb-4 text-center">
        <h2 class="fw-bold">{{ article.title }}</h2>
        <img :src="article.image" class="img-fluid rounded mt-3 shadow-sm" :alt="article.title">
      </div>

      <!-- محتوای مقاله -->
      <div class="mb-5">
        <p class="lead text-muted" v-html="article.content"></p>
      </div>

      <!-- نظرات کاربران (ثابت برای تست) -->
      <div class="mb-5">
        <h4 class="fw-bold mb-3">نظرات کاربران</h4>
        <div class="border rounded p-3 mb-3 bg-light">
          <strong>مینا:</strong>
          <p class="mb-0">مقاله‌ی مفیدی بود، ممنون از توضیحاتتون 🌸</p>
        </div>
        <div class="border rounded p-3 mb-3 bg-light">
          <strong>احمد:</strong>
          <p class="mb-0">خیلی آموزنده بود، مخصوصاً بخش مربوط به گوش دادن فعال.</p>
        </div>
      </div>

      <!-- ارسال نظر جدید -->
      <div class="border p-4 rounded shadow-sm">
        <h4 class="fw-bold mb-3">ارسال نظر جدید</h4>
        <form>
          <div class="mb-3">
            <label class="form-label">نام شما</label>
            <input type="text" class="form-control" placeholder="نام خود را وارد کنید">
          </div>
          <div class="mb-3">
            <label class="form-label">ایمیل شما</label>
            <input type="email" class="form-control" placeholder="ایمیل خود را وارد کنید">
          </div>
          <div class="mb-3">
            <label class="form-label">نظرتان را بنویسید</label>
            <textarea class="form-control" rows="4" placeholder="نظر خود را وارد کنید"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">ارسال نظر</button>
        </form>
      </div>
    </div>

    <div v-else>
      <h3 class="text-center text-danger">مقاله یافت نشد 😔</h3>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import articlesArray from '~/data/articles.js'

// تبدیل آرایه به آبجکت با کلید slug برای دسترسی راحت
const articles = {}
articlesArray.forEach(article => {
  articles[article.slug] = article
})

const route = useRoute()
const slug = route.params.slug

const article = articles[slug]
</script>
