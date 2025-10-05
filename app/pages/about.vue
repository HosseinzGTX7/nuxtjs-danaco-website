<template>
  <div class="container py-5">
    <h1 class="text-center mb-5">درباره ما</h1>

    <div class="row justify-content-center text-center g-4">

      <!-- اهداف ما -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 p-3 shadow-sm">
          <div class="mb-3">
            <i class="bi bi-flag-fill fs-1 text-primary"></i>
          </div>
          <h3 class="mb-2">اهداف ما</h3>
          <p>داناکو مجموعه ای است با هدف فراهم آوردن فضایی امن، شاد، و آموزشی برای کودکان. ما به رشداجتماعی و خلاقیت آنها اهمیت می دهیم.</p>
        </div>
      </div>

      <!-- اعضای تیم -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 p-3 shadow-sm text-center">
          <div class="mb-3">
            <i class="bi bi-people-fill fs-1 text-primary"></i>
          </div>
          <h3 class="mb-2">اعضای تیم</h3>
          <ul class="list-group list-group-flush" style="direction: rtl;">
            <li class="list-group-item d-flex align-items-center justify-content-start">
              <span class="text-primary ms-2">•</span>
              <span>مدیر: زهرا اسماعیل زاده</span>
            </li>
            <li class="list-group-item d-flex align-items-center justify-content-start">
              <span class="text-primary ms-2">•</span>
              <span>مربی ارشد: زهرا اسماعیل زاده </span>
            </li>
            <li class="list-group-item d-flex align-items-center justify-content-start">
              <span class="text-primary ms-2">•</span>
              <span>مسئول ایمنی: زهرا اسماعیل زاده</span>
            </li>
        </ul>

        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 p-3 shadow-sm">
          <div class="mb-3">
            <i class="bi bi-award-fill fs-1 text-primary"></i>
          </div>
          <h3 class="mb-2">افتخارات و مجوزها</h3>
          <p>دارای مجوز های ایمنی و دوره های استاندارد آموزشی</p>
        </div>
      </div>

      <!-- ماموریت‌ها -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 p-3 shadow-sm">
          <div class="mb-3">
            <i class="bi bi-compass-fill fs-1 text-primary"></i>
          </div>
          <h3 class="mb-2">ماموریت‌ها</h3>
          <p>ماموریت ما ایجاد خاطرات شاد، پرورش خلاقیت و آموزش از طریق بازی است.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// هیچ چیزی برای script فعلا لازم نیست
</script>

<style scoped>
.card {
  border-radius: 15px;
}
.card h3 {
  font-weight: bold;
}
.card p {
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
