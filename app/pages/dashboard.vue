<template>
  <section class="container my-5" dir="rtl">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
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

          <!-- تب‌ها -->
          <ul class="nav nav-pills justify-content-center mb-4 flex-wrap" role="tablist">
            <li class="nav-item" v-for="tab in tabs" :key="tab.key">
              <button
                class="nav-link"
                :class="{ active: activeTab === tab.key }"
                @click="activeTab = tab.key"
              >
                {{ tab.label }}
              </button>
            </li>
          </ul>

          <!-- محتوای تب‌ها -->
          <div class="tab-content">

            <!-- تب اطلاعات کاربر -->
            <div v-if="activeTab === 'profile'">
              <div class="list-group mb-3">
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text-muted">نام و نام خانوادگی:</span>
                  <strong>{{ user?.name || '-' }}</strong>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text-muted">تاریخ عضویت:</span>
                  <strong>{{ formattedJoinDate }}</strong>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text-muted">تلفن همراه:</span>
                  <strong>{{ user?.phone || '-' }}</strong>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text-muted">ایمیل:</span>
                  <strong>{{ user?.email || '-' }}</strong>
                </div>
              </div>

              <div class="d-flex gap-2">
                <button class="btn btn-outline-secondary flex-fill" @click="onChangePassword">تغییر رمز</button>
                <button class="btn btn-primary flex-fill" @click="onEditProfile">ویرایش پروفایل</button>
              </div>
            </div>

            <!-- تب کیف پول -->
            <div v-if="activeTab === 'wallet'">
              <div class="text-center mb-4">
                <h5>موجودی فعلی:</h5>
                <h3 class="fw-bold text-success">{{ walletBalance.toLocaleString() }} تومان</h3>
              </div>

              <!-- تاریخچه تراکنش‌ها -->
              <div class="table-responsive mb-3">
                <table class="table table-striped text-center align-middle">
                  <thead class="table-light">
                    <tr>
                      <th>مقدار</th>
                      <th>نوع تراکنش</th>
                      <th>تاریخ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(t, i) in transactions" :key="i">
                      <td>{{ t.amount.toLocaleString() }} تومان</td>
                      <td>{{ t.type }}</td>
                      <td>{{ t.date }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="text-center">
                <button class="btn btn-primary" @click="openModal">شارژ حساب</button>
              </div>

              <!-- Modal -->
              <div class="modal fade" id="walletModal" tabindex="-1" aria-hidden="true" ref="walletModalEl">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content p-3">
                    <div class="modal-header border-0">
                      <h5 class="modal-title fw-bold">
                        <i class="bi bi-wallet2 text-primary me-2"></i>
                        شارژ حساب
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                      <!-- نوع شارژ و مقدار -->
                      <div class="row g-3 mb-3">
                        <div class="col-6">
                          <label class="form-label">نوع شارژ</label>
                          <select class="form-select" v-model="chargeType">
                            <option disabled value="">انتخاب کنید</option>
                            <option value="ساعتی">ساعتی</option>
                            <option value="روزانه">روزانه</option>
                            <option value="ماهانه">ماهانه</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <label class="form-label">مقدار شارژ</label>
                          <select class="form-select" v-model="chargeAmount">
                            <option disabled value="">انتخاب کنید</option>
                            <option v-for="a in [100000,200000,300000,400000,500000]" :key="a" :value="a">
                              {{ a.toLocaleString() }} تومان
                            </option>
                            <option value="custom">مبلغ دلخواه</option>
                          </select>
                        </div>
                      </div>

                      <!-- مبلغ دلخواه -->
                      <div v-if="chargeAmount === 'custom'" class="mb-3">
                        <label class="form-label">مبلغ دلخواه (تومان)</label>
                        <input type="number" class="form-control" v-model="customAmount" placeholder="مثلاً 75000" />
                      </div>

                      <!-- دکمه تایید -->
                      <div class="text-center mb-3">
                        <button class="btn btn-success w-100" @click="confirmSelection">
                          تایید
                        </button>
                      </div>

                      <!-- نمایش اطلاعات تایید شده -->
                      <div v-if="confirmed" class="border-top pt-3 text-center">
                        <p class="mb-1">نوع شارژ: <strong>{{ chargeType }}</strong></p>
                        <p class="mb-3">مبلغ: <strong>{{ finalAmount.toLocaleString() }} تومان</strong></p>
                        <button class="btn btn-primary w-100">
                          پرداخت آنلاین
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- تب‌های دیگر -->
            <div v-if="activeTab === 'history'" class="p-3 text-center text-muted">تاریخچه رزروها و خریدها</div>
            <div v-if="activeTab === 'children'" class="p-3 text-center text-muted">لیست فرزندان کاربر</div>
            <div v-if="activeTab === 'rewards'" class="p-3 text-center text-muted">امتیازها و کوپن‌ها</div>
            <div v-if="activeTab === 'messages'" class="p-3 text-center text-muted">پیام‌ها و اعلان‌ها</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useUserStore } from '~/stores/useUserStore'

// فقط در کلاینت Bootstrap رو ایمپورت 
let Modal = null
if (process.client) {
  Modal = (await import('bootstrap')).Modal
}

const userStore = useUserStore()
const user = computed(() => userStore.user)

const tabs = [
  { key: 'profile', label: 'اطلاعات کاربر' },
  { key: 'wallet', label: 'کیف پول' },
  { key: 'history', label: 'تاریخچه' },
  { key: 'children', label: 'فرزندان' },
  { key: 'rewards', label: 'امتیازها و کوپن‌ها' },
  { key: 'messages', label: 'پیغام‌ها' }
]
const activeTab = ref('wallet')

// کیف پول
const walletBalance = ref(245000)
const transactions = ref([
  { amount: 100000, type: 'شارژ حساب', date: '1403/07/15' },
  { amount: 50000, type: 'رزرو کارگاه آموزشی', date: '1403/07/17' },
  { amount: 200000, type: 'هزینه جشن تولد', date: '1403/08/01' }
])

// modal
let walletModal = null
const walletModalEl = ref(null)

onMounted(async () => {
  if (process.client) {
    await nextTick()
    if (walletModalEl.value && Modal) {
      walletModal = new Modal(walletModalEl.value)
    }
  }
})

function openModal() {
  if (walletModal) {
    walletModal.show()
  }
}

// شارژ
const chargeType = ref('')
const chargeAmount = ref('')
const customAmount = ref(null)
const confirmed = ref(false)
const finalAmount = computed(() =>
  chargeAmount.value === 'custom' ? Number(customAmount.value || 0) : Number(chargeAmount.value)
)

function confirmSelection() {
  if (!chargeType.value || !finalAmount.value) {
    alert('لطفاً نوع شارژ و مبلغ را انتخاب کنید.')
    return
  }
  confirmed.value = true
}

const formattedJoinDate = computed(() => {
  if (!user.value?.joinedAt) return '-'
  try {
    return new Date(user.value.joinedAt).toLocaleDateString('fa-IR')
  } catch {
    return user.value.joinedAt
  }
})

function onChangePassword() {
  alert('فرم تغییر رمز در آینده اضافه می‌شود.')
}

function onEditProfile() {
  alert('فرم ویرایش پروفایل در آینده اضافه می‌شود.')
}
</script>


<style scoped>
.card { border-radius: 12px; }
.nav-pills .nav-link { border-radius: 999px; padding: 0.5rem 1rem; }
.modal-content { border-radius: 16px; }
select, input { border-radius: 8px; }
</style>
