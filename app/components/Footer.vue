<template>
  <footer class="bg-dark text-white pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row">

        <div class="col-12 col-md-3 mb-4">
          <h5 class="fw-bold mb-3">تماس با ما</h5>
          <p class="mb-1"><i class="bi bi-geo-alt-fill ms-2"></i> خراسان رضوی، کاشمر، خیابان تیر</p>
          <p class="mb-1"><i class="bi bi-telephone-fill ms-2"></i>552-23-334</p>
          <p class="mb-1"><i class="bi bi-envelope-fill ms-2"></i> info@danaco.com</p>
        </div>

        <div class="col-12 col-md-3 mb-4">
          <h5 class="fw-bold mb-3">شبکه‌های اجتماعی</h5>
          <div class="d-flex gap-3">
            <a href="#" target="_blank" class="footer-link fs-4"><i class="bi bi-facebook"></i></a>
            <a href="#" target="_blank" class="footer-link fs-4"><i class="bi bi-instagram"></i></a>
            <a href="#" target="_blank" class="footer-link fs-4"><i class="bi bi-twitter"></i></a>
            <a href="#" target="_blank" class="footer-link fs-4"><i class="bi bi-youtube"></i></a>
          </div>
        </div>

        <div class="col-12 col-md-3 mb-4">
          <h5 class="fw-bold mb-3">سایت‌های مفید</h5>
          <ul class="list-unstyled p-0">
            <li><NuxtLink to="/blog" class="footer-link text-decoration-none">مقالات آموزشی</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="footer-link text-decoration-none">گالری</NuxtLink></li>
            <li><a href="https://www.irantourism.ir" target="_blank" class="footer-link text-decoration-none">گردشگری ایران</a></li>
            <li><a href="https://www.kidsfun.ir" target="_blank" class="footer-link text-decoration-none">تفریحات کودکان</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-3 mb-4">
          <h5 class="fw-bold mb-3">قوانین سایت</h5>
          <ul class="list-unstyled p-0">
            <li><NuxtLink to="/" class="footer-link text-decoration-none">شرایط استفاده</NuxtLink></li>
            <li><NuxtLink to="/" class="footer-link text-decoration-none">حریم خصوصی</NuxtLink></li>
            <li><NuxtLink to="/" class="footer-link text-decoration-none">سؤالات متداول</NuxtLink></li>
          </ul>
        </div>

      </div>

      <hr class="border-secondary" />

      <div class="text-center small">
        &copy; 2025 شهربازی داناکو. تمامی حقوق محفوظ است.
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer-link,
  footer a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-link:hover,
  footer a:hover {
    color: #0d6efd;
}
</style>
