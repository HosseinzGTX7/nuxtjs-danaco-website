<template>
  <section class="container my-5">
    <!-- بخش خوش آمدگویی -->
    <div class="row align-items-center bg-secondary bg-opacity-25 mb-5 p-4 rounded shadow">
      <div class="col-md-6">
        <h1 class="fw-bold welcome-title">به خانه بازی داناکو خوش آمدید!</h1>
        <p class="text-muted mt-3">
          تجربه‌ای شاد و آموزشی برای کودکان با محیطی ایمن و جذاب. سرگرمی،
          یادگیری و خاطرات شیرین در یکجا!
        </p>
        <div class="mt-4">
          <NuxtLink to="/auth/login" class="btn btn-primary ms-2"
            >ورود / ثبت نام</NuxtLink
          >
          <NuxtLink to="/about" class="btn btn-outline-primary"
            >اطلاعات بیشتر</NuxtLink
          >
        </div>
      </div>
      <div class="col-md-6 text-center">
        <img
          src="/images/IMG_20251005_163552_376.png"
          class="img-fluid rounded m-2"
          alt="شهربازی"
        />
      </div>
    </div>

    <!-- اسلایدر تصاویر -->
    <div
      id="homeCarousel"
      class="carousel slide mb-5 shadow-lg rounded-3 overflow-hidden"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <!-- اضافه کردن اندیکاتورها -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in sliderImages"
          :key="index"
          type="button"
          data-bs-target="#homeCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          class="rounded-circle"
          style="width: 12px; height: 12px;"
        ></button>
      </div>
  
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(slide, index) in sliderImages"
          :key="index"
        >
          <img
            :src="slide"
            class="d-block w-100"
            alt="Slide Image"
            style="height: 500px; object-fit: cover;"
          />
          <!-- اضافه کردن overlay و caption -->
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>خانه بازی داناکو</h5>
            <p>محیطی شاد و ایمن برای کودکان</p>
          </div>
        </div>
      </div>
  
  <!-- بهبود دکمه‌های کنترل -->
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#homeCarousel"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon bg-primary rounded-circle p-3" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#homeCarousel"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon bg-primary rounded-circle p-3" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <!-- نمایش سه خدمت -->
    <h2 class="fw-bold mb-4">خدمات ویژه</h2>
    <div class="row g-4 mb-5">
      <div
        class="col-12 col-md-4"
        v-for="(service, index) in servicesToShow"
        :key="index"
      >
        <div class="card h-100 shadow-sm text-center">
          <img
            :src="service.image"
            class="card-img-top"
            style="height: 200px; object-fit: contain"
            :alt="service.title"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ service.title }}</h5>
            <p class="card-text text-muted">{{ service.description }}</p>
            <p class="fw-bold">{{ service.price }} تومان</p>
            <button class="btn btn-primary">رزرو</button>
          </div>
        </div>
      </div>
    </div>

    <!-- نمایش چهار عکس گالری -->
    <h2 class="fw-bold mb-4">گالری</h2>
    <div class="row g-4 mb-3">
      <div
        class="col-12 col-md-3"
        v-for="(item, index) in galleryToShow"
        :key="index"
      >
        <div class="position-relative overflow-hidden rounded shadow-sm">
          <img
            :src="item.image"
            class="img-fluid w-100"
            style="height: 200px; object-fit: cover"
            :alt="item.title"
          />
          <div
            class="position-absolute bottom-0 start-0 w-100 p-2 text-white"
            style="background: rgba(0, 0, 0, 0.5)"
          >
            <h5 class="mb-0">{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mb-5">
      <NuxtLink to="/gallery" class="btn btn-outline-primary"
        >مشاهده بیشتر</NuxtLink
      >
    </div>

    <!-- نظرات مشتریان -->
    <h2 class="fw-bold mb-4">نظرات مشتریان</h2>
    <div class="row g-4 mb-5">
      <div
        class="col-12 col-md-4"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <div class="border rounded p-3 h-100 shadow-sm">
          <strong>{{ review.name }}:</strong>
          <p class="mb-0">{{ review.text }}</p>
        </div>
      </div>
    </div>

    <!-- آخرین مقالات وبلاگ -->
    <h2 class="fw-bold mb-4">آخرین مقالات</h2>
    <div class="row g-4">
      <div
        class="col-12 col-md-4"
        v-for="article in articlesToShow"
        :key="article.slug"
      >
        <div class="card h-100 shadow-sm">
          <img
            :src="article.image"
            class="card-img-top"
            style="height: 200px; object-fit: cover"
            :alt="article.title"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ article.title }}</h5>
            <p class="card-text text-muted">{{ article.summary }}</p>
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
import { computed, onMounted } from "vue";
import { useServicesStore } from "~/stores/useServicesStore";
import { useGalleryStore } from "~/stores/useGalleryStore";
import { useBlogStore } from "~/stores/useArticlesStore";

const servicesStore = useServicesStore();
const galleryStore = useGalleryStore();
const blogStore = useBlogStore();

// reactive computed برای SSR-safe بودن
const services = computed(() => servicesStore.services || []);
const galleryItems = computed(() => galleryStore.items || []);
const articles = computed(() => blogStore.articles || []);

// بخش‌های محدود برای نمایش (slice امن)
const servicesToShow = computed(() =>
  Array.isArray(services.value) ? services.value.slice(0, 3) : []
);
const galleryToShow = computed(() =>
  Array.isArray(galleryItems.value) ? galleryItems.value.slice(0, 4) : []
);
const articlesToShow = computed(() =>
  Array.isArray(articles.value) ? articles.value.slice(0, 3) : []
);

const sliderImages = [
  "/images/IMG_20251005_131532_108.webp",
  "/images/IMG_20251005_131531_954.webp",
  "/images/IMG_20251005_163553_023.webp",
];

const reviews = [
  { name: "مینا", text: "تجربه‌ای فوق‌العاده برای فرزندانم بود! 🌸" },
  { name: "احمد", text: "محیط بسیار امن و آموزشی، پیشنهاد می‌کنم." },
  { name: "سارا", text: "کودکان عاشق بازی‌ها و فعالیت‌ها شدند." },
];

// اگر storeها async هستن، اینجا می‌تونیم fetch کنیم
onMounted(() => {
  if (servicesStore.fetchServices) servicesStore.fetchServices();
  if (galleryStore.fetchItems) galleryStore.fetchItems();
  if (blogStore.fetchArticles) blogStore.fetchArticles();
});
</script>

<style scoped>
/* بهبود استایل اسلایدر */
.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: var(--bs-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: 60%;
  transition: all 0.3s ease;
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  background-color: var(--bs-primary);
  transform: scale(1.1);
}

.carousel-indicators button {
  background-color: #dee2e6;
  border: 2px solid #fff;
  transition: all 0.3s ease;
}

.carousel-indicators button.active {
  background-color: var(--bs-primary);
  transform: scale(1.2);
}

/* انیمیشن برای اسلایدها */
.carousel-item {
  transition: transform 0.6s ease-in-out;
}

/* سایه و گردی بیشتر برای کل اسلایدر */
#homeCarousel {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.welcome-title {
  font-size: 2rem;
}

@media (max-width: 576px) {
  .welcome-title {
    font-size: 1.2rem;
  }
  .carousel-control-prev,
  .carousel-control-next {
  width: 13%;
  }
  /* ارتفاع کمتر برای موبایل با حفظ نسبت عکس */
  .carousel-item img {
    height: 250px !important;
    object-fit: cover !important;
  }
  
  /* کوچک‌تر کردن اندیکاتورها در موبایل */
  .carousel-indicators button {
    width: 8px !important;
    height: 8px !important;
  }
}
</style>

