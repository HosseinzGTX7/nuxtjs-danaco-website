<template>
  <div class="container py-4">
    <h5 class="fw-bold mb-4 text-center">تاریخچه فعالیت‌ها</h5>

    <div class="table-responsive">
      <table class="table table-striped align-middle text-center">
        <thead class="table-light">
          <tr>
            <th>نوع فعالیت</th>
            <th>ساعت ورود</th>
            <th>ساعت خروج</th>
            <th>تاریخ حضور</th>
            <th>مجموع</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in historyList" :key="index">
            <td class="activity-type">
              <i :class="activityIcon(item.type)" class="me-2"></i>
              {{ item.type }}
            </td>
            <td class="activity-type">{{ item.startTime }}</td>
            <td class="activity-type">{{ item.endTime }}</td>
            <td>{{ item.date }}</td>
            <td class="activity-type">{{ item.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
//بعدا این لیست رو از api می گیرم
const historyList = [
  {
    type: 'ساعت آزاد بازی',
    startTime: '10:00',
    endTime: '12:00',
    date: '1403/07/15',
    total: '2 ساعت'
  },
  {
    type: 'کارگاه آموزشی',
    startTime: '14:00',
    endTime: '16:00',
    date: '1403/07/18',
    total: '2 ساعت'
  },
  {
    type: 'جشن تولد',
    startTime: '17:00',
    endTime: '19:30',
    date: '1403/07/20',
    total: '2.5 ساعت'
  },
  {
    type: 'اتاق بازی کودک',
    startTime: '09:30',
    endTime: '11:00',
    date: '1403/07/22',
    total: '1.5 ساعت'
  }
]

function activityIcon(type) {
  switch (type) {
    case 'ساعت آزاد بازی': return 'bi bi-controller ms-1'
    case 'کارگاه آموزشی': return 'bi bi-journal-text ms-1'
    case 'جشن تولد': return 'bi bi-cake ms-1'
    case 'اتاق بازی کودک': return 'bi bi-house-door ms-1'
    default: return 'bi bi-circle'
  }
}
</script>

<style scoped>
.table td i {
  color: #0d6efd;
}

/* حالت پیش‌فرض دسکتاپ */
.activity-type {
  min-width: 150px;
}

/* موبایل */
@media (max-width: 576px) {
  .activity-type {
    white-space: nowrap;
    min-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

</style>
