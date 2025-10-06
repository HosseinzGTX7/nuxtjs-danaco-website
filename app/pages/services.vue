<template>
  <section class="container my-5">

    <div class="d-flex align-items-center mb-5">
      <i class="bi bi-star-fill fs-2 text-warning ms-2"></i>
      <h2 class="fw-bold mb-0">خدمات ویژه</h2>
    </div>

    <!-- کارت‌های خدمات -->
    <div class="row g-4 mb-5">
      <div class="col-12 col-md-4" v-for="(service, index) in servicesStore.services" :key="index">
        <div class="card h-100 shadow-sm text-center">
          <img :src="service.image" class="card-img-top" :alt="service.title" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ service.title }}</h5>
            <p class="card-text text-muted">{{ service.description }}</p>
            <p class="fw-bold">{{ service.price }} تومان</p>
            <button class="btn btn-primary">رزرو</button>
          </div>
        </div>
      </div>
    </div>

    <!-- جدول قیمت‌ها -->
    <div class="d-flex align-items-center mb-3">
      <i class="bi bi-tag fs-2 text-primary ms-2"></i>
      <h3 class="fw-bold mb-0">جدول قیمت‌ها</h3>
    </div>

    <div class="table-responsive">
      <table class="table text-end table-hover modern-table">
        <thead class="table-light">
          <tr>
            <th>خدمات</th>
            <th>قیمت (تومان)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in servicesStore.priceList" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>

      <p class="text-muted mt-2">ورودی ساعتی، جشن تولد و کارگاه آموزشی</p>
    </div>

  </section>
</template>

<script setup>
import { useServicesStore } from '~/stores/useServices'

const servicesStore = useServicesStore()
</script>

<style scoped>
.card-img-top {
  height: 200px;
  width: 100%;
  object-fit: contain;
  background-color: #f8f9fa;
  padding: 10px;
}
.modern-table {
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: none;
}

.modern-table thead th {
  background-color: #e9f5ff;
  color: #0d6efd;
  font-weight: 600;
}

.modern-table tbody tr {
  background-color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
}

.modern-table tbody tr:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.modern-table td, .modern-table th {
  border: none;
  padding: 0.75rem 1.25rem;
}
</style>
