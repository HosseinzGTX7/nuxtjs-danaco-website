<template>
  <header>
    <!-- بخش بالایی -->
    <div class="d-flex justify-content-between align-items-center px-4 py-2 top-bar">
        
      <div class="d-flex align-items-center">
        <img src="/images/IMG_20251005_163552_989.png" alt="لوگو" width="40" height="40" class="me-2" />
        <span class="fw-bold fs-3 text-primary">داناکو</span>
      </div>

      <button class="btn btn-primary fw-bold rounded-pill">رزرو اتاق بازی</button>
    </div>

    <!-- بخش منو -->
    <nav class="navbar navbar-expand-lg navbar-dark main-nav px-4">
      <div class="container-fluid">
        <!-- لوگو نسخه موبایل -->
        <a class="navbar-brand d-lg-none" href="#">منو</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav py-1 px-3 ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active" href="#">صفحه اصلی</a></li>
            <li class="nav-item"><a class="nav-link" href="#">خدمات</a></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/gallery">گالری</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/blog">وبلاگ</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/contact">تماس</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/about">درباره ما</NuxtLink></li>
          </ul>

          <span class="text-dark fw-bold p-1 me-2 mt-lg-0">0912-123-4567 <i class="bi bi-telephone-inbound"></i></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

.top-bar {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

/* بخش منو */
.main-nav {
  background-color: #898989;
}
.nav-link {
  color: #e4e3e3 !important;
  margin-left: 10px;
  transition: 0.3s;
}
.nav-link:hover {
  color: #000000 !important;
}

</style>
