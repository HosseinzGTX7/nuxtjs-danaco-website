<template>
  <section class="container my-5">
    <div v-if="article">
      <div class="row align-items-center mb-4 flex-row-reverse">
        <div class="col-md-4">
          <img :src="article.image" class="img-fluid rounded shadow-sm" :alt="article.title" />
        </div>

        <div class="col-md-8 order-md-2 mt-4 mt-md-0">
          <h2 class="fw-bold">{{ article.title }}</h2>
          <p class="text-muted mb-1">
            نویسنده: {{ article.author }} | تاریخ: {{ article.date }} | دسته‌بندی: {{ article.category }}
          </p>
        </div>
      </div>

      <div class="mb-5">
        <p class="lead text-muted" v-html="article.content"></p>
      </div>

      <!-- نظرات کاربران (ثابت برای تست) -->
      <div class="mb-5">
         <h4 class="fw-bold mb-3 d-flex align-items-center">
           <i class="bi bi-chat-heart-fill ms-2 fs-3"></i>
           نظرات کاربران
         </h4>
        <div class="border rounded p-3 mb-3 bg-secondary bg-opacity-25">
          <strong>مینا:</strong>
          <p class="mb-0">مقاله‌ی مفیدی بود، ممنون از توضیحاتتون 🌸</p>
        </div>
        <div class="border rounded p-3 mb-3 bg-secondary bg-opacity-25">
          <strong>احمد:</strong>
          <p class="mb-0">خیلی آموزنده بود، مخصوصاً بخش مربوط به گوش دادن فعال.</p>
        </div>
      </div>

      <div class="border p-4 rounded shadow-sm">
        <h4 class="fw-bold mb-3 d-flex align-items-center">
          <i class="bi bi-pencil-square ms-2 fs-3"></i>
          ارسال نظر جدید
        </h4>
        <form>
          <div class="mb-3">
            <label class="form-label">نام شما</label>
            <input type="text" class="form-control" placeholder="نام خود را وارد کنید" />
          </div>
          <div class="mb-3">
            <label class="form-label">ایمیل شما</label>
            <input type="email" class="form-control" placeholder="ایمیل خود را وارد کنید" />
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
import articles from '~/data/articles.js'

const route = useRoute()
const { id, slug } = route.params

const article = articles.find(a => a.id === id && a.slug === slug)
</script>
