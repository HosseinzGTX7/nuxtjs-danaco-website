<template>
  <div>
    <!-- موجودی -->
    <div class="text-center mb-4 p-3 border rounded shadow-sm">
      <h5>موجودی فعلی:</h5>
      <h3 class="fw-bold text-success">{{ walletBalance.toLocaleString() }} تومان</h3>
    </div>

    <!-- تاریخچه تراکنش -->
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
            <td :class="transactionClass(t.type)">{{ t.type }}</td>
            <td>{{ t.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- دکمه شارژ حساب -->
    <div class="text-center mb-3">
      <button class="btn btn-primary" @click="openModal">شارژ حساب</button>
    </div>

    <!-- مودال شارژ حساب -->
    <div class="modal fade" ref="walletModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
          <div class="modal-header border-0">
            <h5 class="modal-title fw-bold">
              <button type="button" class="btn-close" @click="walletModalInstance.hide()"></button>
              شارژ حساب
              <i class="bi bi-wallet2 text-primary me-2"></i>
            </h5>
          </div>

          <div class="modal-body">
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
            <div v-if="chargeAmount==='custom'" class="mb-3">
              <label class="form-label">مبلغ دلخواه (تومان)</label>
              <input type="number" class="form-control" v-model="customAmount" placeholder="مثلا 75000" />
            </div>

            <!-- دکمه تایید -->
            <div class="text-center mb-3">
              <button class="btn btn-success w-100" @click="confirmSelection">تایید</button>
            </div>

            <!-- اطلاعات تایید شده و پرداخت آنلاین -->
            <div v-if="confirmed" class="border-top pt-3 text-center">
              <p class="mb-1">نوع شارژ: <strong>{{ chargeType }}</strong></p>
              <p class="mb-3">مبلغ: <strong>{{ finalAmount.toLocaleString() }} تومان</strong></p>
              <button class="btn btn-primary w-100">پرداخت آنلاین</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps({
  walletBalance: Number,
  transactions: Array
})

let Modal = null
if (process.client) {
  Modal = (await import('bootstrap')).Modal
}

const walletModal = ref(null)
let walletModalInstance = null

onMounted(async () => {
  if (process.client && walletModal.value && Modal) {
    await nextTick()
    walletModalInstance = new Modal(walletModal.value)
  }
})

function openModal() {
  walletModalInstance?.show()
}

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

function transactionClass(type) {
  switch(type){
    case 'شارژ حساب': return 'bg-success text-white rounded'
    case 'رزرو کارگاه آموزشی': return 'bg-warning text-dark rounded'
    case 'هزینه جشن تولد': return 'bg-danger text-white rounded'
    default: return ''
  }
}
</script>

<style scoped>
.table th, .table td { vertical-align: middle; }
.modal-content { border-radius: 16px; }
</style>