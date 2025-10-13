<template>
  <div class="messages-tab container py-4">

    <!-- عنوان -->
    <h4 class="fw-bold mb-4 text-center">📩 پیغام‌های شما</h4>

    <!-- وضعیت لودینگ -->
    <div v-if="loading" class="text-center text-muted py-5">
      <div class="spinner-border text-secondary mb-3"></div>
      <p>در حال بارگذاری پیغام‌ها...</p>
    </div>

    <!-- در صورت وجود خطا -->
    <div v-else-if="error" class="alert alert-danger text-center">
      خطایی در دریافت پیغام‌ها رخ داده است.
    </div>

    <!-- لیست پیغام‌ها -->
    <div v-else>
      <div v-if="messages.length > 0" class="row g-3">
        <div v-for="(msg, index) in messages" :key="index" class="col-12">
          <div class="message-card p-3 shadow-sm">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bold mb-0 text-dark">{{ msg.title }}</h6>
              <small class="text-muted">{{ formatDate(msg.date) }}</small>
            </div>
            <p class="mb-0 text-secondary">{{ msg.content }}</p>
          </div>
        </div>
      </div>

      <!-- اگر پیغامی نبود -->
      <div v-else class="text-center text-muted py-4">
        پیغامی برای نمایش وجود ندارد.
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const messages = ref([]);
const loading = ref(true);
const error = ref(false);

// تابع شبیه‌سازی درخواست به API (بعداً می‌تونی آدرس واقعی بدی)
const fetchMessages = async () => {
  try {
    // شبیه‌سازی تاخیر پاسخ سرور
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // داده نمایشی
    const response = [
      {
        title: "تبریک! شما ۵۰ امتیاز جدید دریافت کردید 🎉",
        content: "به دلیل تکمیل پروفایل خود، ۵۰ امتیاز به حساب شما اضافه شد.",
        date: "2025-10-10"
      },
      {
        title: "به‌روزرسانی شرایط استفاده",
        content: "شرایط استفاده از سرویس به‌روزرسانی شده است. لطفاً مطالعه فرمایید.",
        date: "2025-09-28"
      },
      {
        title: "کوپن جدید فعال شد 🎁",
        content: "کوپن تخفیف ۲۰٪ خرید برای شما فعال شده است. تا پایان ماه فرصت استفاده دارید.",
        date: "2025-09-15"
      }
    ];

    // مقداردهی نهایی
    messages.value = response;
  } catch (err) {
    console.error(err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchMessages();
});

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped>
.messages-tab {
  direction: rtl;
}

/* طراحی کارت پیام */
.message-card {
  background-color: #f5f5f5;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.message-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}
</style>