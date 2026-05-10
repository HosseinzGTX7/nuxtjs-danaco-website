<template>
  <div class="container py-5" style="direction: rtl; text-align: right;">
    <h2 class="text-center mb-5 fw-bold text-primary">تماس با ما</h2>

    <div class="row g-4">
      <!-- بخش راست: فرم تماس -->
      <div class="col-12 col-lg-6">
        <div class="card shadow-sm p-4 h-100">
          <h5 class="fw-bold mb-3">ارسال پیام</h5>

          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label class="form-label">نام و نام خانوادگی</label>
              <input v-model="form.name" type="text" class="form-control text-end rounded-pill" placeholder="نام خود را وارد کنید" required />
            </div>

            <div class="mb-3">
              <label class="form-label">ایمیل</label>
              <input v-model="form.email" type="email" class="form-control text-end rounded-pill" placeholder="example@gmail.com" required />
            </div>

            <div class="mb-3">
              <label class="form-label">موضوع</label>
              <input v-model="form.subject" type="text" class="form-control text-end rounded-pill" placeholder="موضوع پیام شما" required />
            </div>

            <div class="mb-3">
              <label class="form-label">پیام شما</label>
              <textarea v-model="form.message" class="form-control text-end rounded-4" rows="4" placeholder="متن پیام خود را بنویسید..." required></textarea>
            </div>

            <!-- کد امنیتی -->
            <div class="mb-3 d-flex align-items-center">
              <input
                v-model="form.captchaInput"
                type="text"
                class="form-control text-end me-2 rounded-pill"
                placeholder="کد امنیتی را وارد کنید"
                required
              />
              <div class="captcha-box d-flex align-items-center justify-content-between me-3 px-3 py-2 rounded-4 bg-light border">
                <span class="fw-bold text-primary">{{ captcha }}</span>
                <button type="button" @click="refreshCaptcha" class="btn btn-sm btn-outline-secondary me-1">
                  <i class="bi bi-arrow-clockwise"></i>
                </button>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <button type="reset" class="btn btn-outline-danger rounded-4 px-4 fw-bold">انصراف</button>
              <button type="submit" class="btn btn-success rounded-4 px-4 fw-bold">ارسال</button>
            </div>
          </form>
        </div>
      </div>

      <!-- بخش چپ: اطلاعات تماس -->
      <div class="col-12 col-lg-6">
        <div class="card shadow-sm p-4 h-100">
          <h5 class="fw-bold mb-3">راه‌های ارتباطی</h5>
          <ul class="list-unstyled mb-4">
            <li class="mb-2"><i class="bi bi-telephone text-primary ms-2"></i> تلفن: *******0915</li>
            <li class="mb-2"><i class="bi bi-envelope text-primary ms-2"></i> ایمیل: danaco.test@gmail.com</li>
            <li><i class="bi bi-geo-alt text-primary ms-2"></i> آدرس: خراسان رضوی</li>
          </ul>

          <h6 class="fw-bold mt-4">ساعت کاری</h6>
          <p class="mb-4">هر روز 8:00 الی 21:00</p>

          <h6 class="fw-bold">موقعیت ما روی نقشه</h6>
          <div class="ratio ratio-16x9 rounded overflow-hidden shadow-sm mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.9039228953592!2d58.46989655477928!3d35.25584326442729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f12a1c87d071a81%3A0x4af193ef26abff3e!2z2K7Yp9mG2Ycg2KjYp9iy24wg2qnZiNiv2qkg2K_Yp9mG2KfaqdmI!5e0!3m2!1sfa!2s!4v1759645852654!5m2!1sfa!2s"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  captchaInput: ''
})

// کد کپچا
const captcha = ref(generateCaptcha())

function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789'
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

function refreshCaptcha() {
  captcha.value = generateCaptcha()
}

function handleSubmit() {
  if (form.value.captchaInput !== captcha.value) {
    alert('کد امنیتی اشتباه است!')
    refreshCaptcha()
    return
  }

  alert('پیام شما با موفقیت ارسال شد ✅')
  // در اینجا می‌تونی ارسال به backend انجام بدی
  form.value = { name: '', email: '', subject: '', message: '', captchaInput: '' }
  refreshCaptcha()
}
</script>

<style scoped>
.captcha-box {
  min-width: 120px;
  font-family: monospace;
  font-size: 1.1rem;
  letter-spacing: 2px;
}
</style>
