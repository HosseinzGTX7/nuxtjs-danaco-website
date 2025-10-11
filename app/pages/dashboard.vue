<template>
  <section class="container my-5" dir="rtl">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">

        <!-- کارت اصلی -->
        <div class="card shadow-sm p-4">

          <!-- آواتار و نام -->
          <div class="text-center">
            <img
              :src="user?.avatar || '/images/IMG_20251005_131532_368.webp'"
              alt="آواتار"
              class="rounded-circle mb-3"
              style="width:120px; height:120px; object-fit:cover;"
            />
            <h3 class="fw-bold mb-0">{{ user?.name || 'کاربر ناشناس' }}</h3>
            <p class="text-muted mb-3">{{ user?.email }}</p>
          </div>

          <!-- نوار تب‌ها -->
          <ul class="nav nav-pills justify-content-center mb-4 flex-wrap" role="tablist">
            <li class="nav-item" v-for="tab in tabs" :key="tab.key">
              <button
                class="nav-link"
                :class="{ active: activeTab === tab.key }"
                @click="activeTab = tab.key"
                type="button"
              >
                {{ tab.label }}
              </button>
            </li>
          </ul>

          <!-- محتوای تب‌ها -->
          <div class="tab-content">
            <!-- تب: اطلاعات کاربر -->
            <div v-if="activeTab === 'profile'">
              <div class="list-group mb-3">
                <div class="list-group-item d-flex justify-content-between align-items-center">
                  <span class="text-muted">نام و نام خانوادگی:</span>
                  <strong class="text-end">{{ user?.name || '-' }}</strong>
                </div>

                <div class="list-group-item d-flex justify-content-between align-items-center">
                  <span class="text-muted">تاریخ عضویت:</span>
                  <strong class="text-end">{{ formattedJoinDate }}</strong>
                </div>

                <div class="list-group-item d-flex justify-content-between align-items-center">
                  <span class="text-muted">تلفن همراه:</span>
                  <strong class="text-end">{{ user?.phone || '-' }}</strong>
                </div>

                <div class="list-group-item d-flex justify-content-between align-items-center">
                  <span class="text-muted">ایمیل:</span>
                  <strong class="text-end">{{ user?.email || '-' }}</strong>
                </div>
              </div>

              <div class="d-flex gap-2">
                <button class="btn btn-outline-secondary flex-fill" @click="onChangePassword">
                  تغییر رمز
                </button>
                <button class="btn btn-primary flex-fill" @click="onEditProfile">
                  ویرایش پروفایل
                </button>
              </div>
            </div>

            <!-- تب: کیف پول (placeholder) -->
            <div v-if="activeTab === 'wallet'">
              <div class="p-3 text-center text-muted">کیف پول شما: <strong>—</strong></div>
            </div>

            <!-- تب: تاریخچه -->
            <div v-if="activeTab === 'history'">
              <div class="p-3 text-center text-muted">تاریخچهٔ سفارش‌ها/رزروها اینجا نمایش داده می‌شود.</div>
            </div>

            <!-- تب: فرزندان -->
            <div v-if="activeTab === 'children'">
              <div class="p-3 text-center text-muted">لیست فرزندان کاربر اینجا خواهد آمد.</div>
            </div>

            <!-- تب: امتیازها و کوپن‌ها -->
            <div v-if="activeTab === 'rewards'">
              <div class="p-3 text-center text-muted">امتیازها و کوپن‌های شما اینجا نمایش می‌شود.</div>
            </div>

            <!-- تب: پیام‌ها -->
            <div v-if="activeTab === 'messages'">
              <div class="p-3 text-center text-muted">پیام‌های ارسالی از پشتیبانی/اعلانات اینجا هستند.</div>
            </div>
          </div>

        </div> <!-- card -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from '~/stores/useUserStore'

const userStore = useUserStore()
const user = computed(() => userStore.user) // reactive reference

// تب‌ها
const tabs = [
  { key: 'profile', label: 'اطلاعات کاربر' },
  { key: 'wallet', label: 'کیف پول' },
  { key: 'history', label: 'تاریخچه' },
  { key: 'children', label: 'فرزندان' },
  { key: 'rewards', label: 'امتیازها و کوپن‌ها' },
  { key: 'messages', label: 'پیغام‌ها' }
]

const activeTab = ref('profile')

// فرمت تاریخ عضویت (در صورت نیاز می‌تونید i18n یا dayjs استفاده کنی)
const formattedJoinDate = computed(() => {
  if (!user.value?.joinedAt) return '-'
  try {
    const d = new Date(user.value.joinedAt)
    return d.toLocaleDateString('fa-IR') // اگر محیط SSR ICU نداشته باشه ممکنه fallback باشه
  } catch {
    return user.value.joinedAt
  }
})

function onChangePassword() {
  // placeholder — بعدا این رو به فرم تغییر رمز یا modal وصل کن
  alert('تغییر رمز (در اپلیکیشن واقعی اینجا فرم نمایش داده می‌شود).')
}

function onEditProfile() {
  // placeholder — می‌تونی modal یا صفحهٔ ویرایش باز کنی
  alert('ویرایش پروفایل (در اپلیکیشن واقعی اینجا فرم ویرایش باز می‌شود).')
}
</script>

<style scoped>
/* کمی زیباسازی */
.card { border-radius: 12px; }
.nav-pills .nav-link { border-radius: 999px; padding: 0.5rem 1rem; }
.list-group-item { background: transparent; border: 1px solid #f1f1f1; }
@media (min-width: 992px) {
  /* در صفحه‌های بزرگ‌تر کمی عرض کارت را محدودتر می‌کنیم */
  .card { padding: 2rem; }
}
</style>
