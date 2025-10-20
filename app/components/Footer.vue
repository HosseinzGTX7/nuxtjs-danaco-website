<template>
  <footer class="custom-footer bg-dark text-white pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row">

        <!-- بخش تماس با ما -->
        <div class="col-12 col-md-3 mb-4">
          <div class="footer-section">
            <h5 class="fw-bold mb-3 section-title">تماس با ما</h5>
            <div class="contact-info">
              <p class="mb-2 d-flex align-items-center">
                <i class="bi bi-geo-alt-fill ms-2 icon-primary"></i>
                خراسان رضوی، کاشمر، خیابان تیر
              </p>
              <p class="mb-2 d-flex align-items-center">
                <i class="bi bi-telephone-fill ms-2 icon-primary"></i>
                552-23-334
              </p>
              <p class="mb-2 d-flex align-items-center">
                <i class="bi bi-envelope-fill ms-2 icon-primary"></i>
                info@danaco.com
              </p>
            </div>
          </div>
        </div>

        <!-- بخش شبکه‌های اجتماعی -->
        <div class="col-12 col-md-3 mb-4">
          <div class="footer-section">
            <h5 class="fw-bold mb-3 section-title">شبکه‌های اجتماعی</h5>
            <div class="social-links d-flex gap-3">
              <a href="#" target="_blank" class="social-icon">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" target="_blank" class="social-icon">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" target="_blank" class="social-icon">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" target="_blank" class="social-icon">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- بخش سایت‌های مفید -->
        <div class="col-12 col-md-3 mb-4">
          <div class="footer-section">
            <h5 class="fw-bold mb-3 section-title">سایت‌های مفید</h5>
            <ul class="footer-links list-unstyled p-0">
              <li class="mb-2">
                <NuxtLink to="/blog" class="footer-link text-decoration-none d-flex align-items-center">
                  <i class="bi bi-arrow-left-short me-1 link-icon"></i>
                  مقالات آموزشی
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/gallery" class="footer-link text-decoration-none d-flex align-items-center">
                  <i class="bi bi-arrow-left-short me-1 link-icon"></i>
                  گالری
                </NuxtLink>
              </li>
              <li class="mb-2">
                <a href="https://www.irantourism.ir" target="_blank" class="footer-link text-decoration-none d-flex align-items-center">
                  <i class="bi bi-arrow-left-short me-1 link-icon"></i>
                  گردشگری ایران
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.kidsfun.ir" target="_blank" class="footer-link text-decoration-none d-flex align-items-center">
                  <i class="bi bi-arrow-left-short me-1 link-icon"></i>
                  تفریحات کودکان
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- بخش قوانین سایت -->
        <div class="col-12 col-md-3 mb-4">
          <div class="footer-section">
            <h5 class="fw-bold mb-3 section-title">قوانین سایت</h5>
            <ul class="footer-links list-unstyled p-0">
              <li class="mb-2">
                <NuxtLink to="/" class="footer-link text-decoration-none d-flex align-items-center">
                  <i class="bi bi-arrow-left-short me-1 link-icon"></i>
                  شرایط استفاده
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/" class="footer-link text-decoration-none d-flex align-items-center">
                  <i class="bi bi-arrow-left-short me-1 link-icon"></i>
                  حریم خصوصی
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/" class="footer-link text-decoration-none d-flex align-items-center">
                  <i class="bi bi-arrow-left-short me-1 link-icon"></i>
                  سؤالات متداول
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <hr class="footer-divider border-secondary my-4" />

      <div class="text-center small copyright">
        &copy; 2025 خانه بازی داناکو. تمامی حقوق محفوظ است.
      </div>
    </div>
  </footer>
</template>

<script setup>
// اسکریپت مورد نیاز
</script>

<style scoped>
.custom-footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
  position: relative;
  overflow: hidden;
}

.custom-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #0d6efd, #6f42c1, #e83e8c);
}

.footer-section {
  position: relative;
  z-index: 1;
}

.section-title {
  position: relative;
  padding-bottom: 10px;
  font-size: 1.1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 130px;
  height: 2px;
  background: linear-gradient(90deg, #0d6efd, transparent);
  border-radius: 2px;
}

.contact-info p {
  transition: transform 0.3s ease;
}

.contact-info p:hover {
  transform: translateX(-5px);
}

.icon-primary {
  color: #0d6efd;
  font-size: 1.1rem;
}

.social-links {
  flex-wrap: wrap;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0d6efd, #6f42c1);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.social-icon i {
  position: relative;
  z-index: 1;
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(13, 110, 253, 0.4);
}

.social-icon:hover::before {
  opacity: 1;
}

.footer-links li {
  transition: transform 0.3s ease;
}

.footer-links li:hover {
  transform: translateX(-5px);
}

.footer-link {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 5px 0;
}

.footer-link:hover {
  color: #0d6efd;
}

.link-icon {
  color: #0d6efd;
  transition: transform 0.3s ease;
}

.footer-link:hover .link-icon {
  transform: translateX(-3px);
}

.footer-divider {
  opacity: 0.3;
}

.copyright {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

/* انیمیشن‌های ظریف برای ظاهر مدرن */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-section {
  animation: fadeInUp 0.5s ease forwards;
}

.footer-section:nth-child(1) { animation-delay: 0.1s; }
.footer-section:nth-child(2) { animation-delay: 0.2s; }
.footer-section:nth-child(3) { animation-delay: 0.3s; }
.footer-section:nth-child(4) { animation-delay: 0.4s; }

/* رسپانسیو برای موبایل */
@media (max-width: 768px) {
  .footer-section {
    text-align: right;
  }
  
  .section-title::after {
    right: 0;
    transform: none;
  }
  
  .social-links {
    justify-content: flex-start;
  }
}
</style>