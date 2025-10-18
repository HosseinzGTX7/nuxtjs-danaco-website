<template>
  <section class="container my-5">
    <div class="d-flex align-items-center mb-4">
      <i class="bi bi-journal-text fs-2 text-primary ms-2"></i>
      <h2 class="fw-bold mb-0">وبلاگ‌ها</h2>
    </div>

    <ul class="nav nav-pills justify-content-center mb-5 ps-5 flex-wrap">
      <li class="nav-item m-1" v-for="cat in categories" :key="cat">
        <button
          class="nav-link w-100 text-center shadow-sm rounded-pill"
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </li>
    </ul>

    <!-- لیست مقالات -->
    <div class="row g-4">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="article in filteredArticles"
        :key="article.slug"
      >
        <div class="card h-100 shadow-sm rounded-5">
          <img
            :src="article.image"
            class="card-img-top rounded-top-5"
            :alt="article.title"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ article.title }}</h5>
            <p class="card-text text-muted">{{ article.summary }}</p>
            <!-- لینک به صفحه داینامیک مقاله -->
            <NuxtLink
              :to="`/blog/${article.id}/${article.slug}`"
              class="btn btn-primary"
              >ادامه مطلب</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useBlogStore } from "~/stores/useArticlesStore";

const blogStore = useBlogStore();

const selectedCategory = ref("همه");

// ساختار دسته‌بندی‌ها داینامیک بر اساس داده‌های store
const categories = computed(() => {
  const cats = blogStore.articles.map((a) => a.category);
  return ["همه", ...new Set(cats)];
});

// فیلتر مقالات بر اساس دسته‌بندی انتخاب‌شده
const filteredArticles = computed(() => {
  if (selectedCategory.value === "همه") return blogStore.articles;
  return blogStore.articles.filter(
    (a) => a.category === selectedCategory.value
  );
});
</script>
