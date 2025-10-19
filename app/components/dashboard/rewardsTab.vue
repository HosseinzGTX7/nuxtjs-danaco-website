<template>
<div class="text-center mb-4 p-3 border rounded shadow-sm">  
  <div class="rewards-tab container py-4">

    <div class="text-center mb-4">
      <h4 class="fw-bold">امتیاز فعلی شما</h4>
      <h2 class="text-primary fw-bold my-2">{{ pointsData.currentPoints }} <small class="text-muted fs-6">از {{ pointsData.maxPoints }}</small></h2>

      <!-- نوار پیشرفت -->
      <div class="progress mx-auto" style="height: 15px; max-width: 400px;">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          :style="{ width: progressPercentage + '%' }"
          :aria-valuenow="pointsData.currentPoints"
          aria-valuemin="0"
          :aria-valuemax="pointsData.maxPoints"
        ></div>
      </div>
    </div>

    <!-- پاداش بعدی -->
    <div class="text-center mb-4">
      <p class="mb-1">
        🎁 <strong>پاداش بعدی:</strong>
        با رسیدن به <span class="text-success">{{ pointsData.nextReward.points }} امتیاز</span> -
        {{ pointsData.nextReward.reward }}
      </p>
      <p class="text-muted mb-0">
        🏅 <strong>سطح فعلی:</strong> {{ pointsData.level }}
      </p>
    </div>

    <!-- کوپن‌ها -->
    <div class="mt-5">
      <h5 class="fw-bold mb-3 text-center">کوپن‌های فعال</h5>

      <div class="row g-3">
        <div
          v-for="(coupon, index) in activeCoupons"
          :key="index"
          class="col-md-4 col-sm-6"
        >
          <div class="coupon-card p-3 h-100 d-flex flex-column justify-content-between text-center">
            <div>
              <h6 class="fw-bold text-dark">{{ coupon.title }}</h6>
              <p class="text-secondary mb-2">{{ coupon.description }}</p>
            </div>
            <div>
              <span class="badge bg-dark text-light">کد: {{ coupon.code }}</span>
              <p class="text-secondary mt-2 mb-0 fs-6">اعتبار تا: {{ coupon.expireDate }}</p>
            </div>
          </div>
        </div>

        <div v-if="activeCoupons.length === 0" class="text-center text-muted py-4">
          کوپن فعالی وجود ندارد.
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script setup>
import { ref, computed } from "vue";

// داده‌های نمایشی اولیه (بعداً از API جایگزین می‌شود)
const pointsData = ref({
  currentPoints: 250,
  maxPoints: 300,
  nextReward: {
    points: 300,
    reward: "یک بلیط رایگان"
  },
  level: "نقره‌ای"
});

const activeCoupons = ref([
  {
    title: "تخفیف ۲۰٪ برای خرید بعدی",
    description: "ویژه کاربران سطح نقره‌ای",
    code: "SILVER20",
    expireDate: "۱۴۰۴/۰۹/۳۰"
  },
  {
    title: "ارسال رایگان",
    description: "برای خرید بالای ۲۰۰ هزار تومان",
    code: "FREEDEL",
    expireDate: "۱۴۰۴/۱۰/۱۵"
  }
]);

// محاسبه درصد نوار پیشرفت
const progressPercentage = computed(() => {
  return Math.min(
    (pointsData.value.currentPoints / pointsData.value.maxPoints) * 100,
    100
  );
});
</script>

<style scoped>
.rewards-tab {
  direction: rtl;
}

/* طراحی کارت کوپن */
.coupon-card {
  background-color: #fff8e1;
  border: 2px dashed #ffca28;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.coupon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

/* نوار پیشرفت */
.progress {
  border-radius: 10px;
  overflow: hidden;
}
</style>