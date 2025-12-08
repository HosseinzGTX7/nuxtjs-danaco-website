<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow-sm p-4 text-center rounded-5" style="max-width: 400px; width: 100%;">

      <h3 class="mb-3">تایید کد ارسال شده</h3>
      <p class="small text-muted mb-4">کد ۶ رقمی ارسال‌شده را وارد کنید</p>

      <!-- OTP Inputs -->
      <div class="d-flex justify-content-center gap-2 mb-3" style="direction: ltr;">
        <input
          v-for="(digit, index) in 6"
          :key="index"
          maxlength="1"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          class="otp-input text-center rounded-circle"
          @input="handleInput($event, index)"
          @keydown.backspace="handleBackspace($event, index)"
          :ref="el => otpRefs[index] = el"
        />
      </div>
      
      <!-- Timer Circle -->
      <div class="d-flex justify-content-center align-items-center mb-3 position-relative" style="width: 70px; height: 70px; margin: 0 auto;">
        <svg width="70" height="70">
          <circle cx="35" cy="35" r="30" stroke="#ddd" stroke-width="4" fill="none" />
          <circle cx="35" cy="35" r="30" stroke="#0d6efd" stroke-width="4" fill="none"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset"
            stroke-linecap="round"
            transform="rotate(-90 35 35)" />
        </svg>
        <div class="position-absolute top-50 start-50 translate-middle fw-bold">{{ formattedTime }}</div>
      </div>

      <!-- Buttons -->
      <button class="btn btn-success w-100 rounded-4 mb-2" @click="verifyOtp">تایید</button>
      <button
        class="btn btn-primary w-100 rounded-4"
        :disabled="timer > 0"
        @click="resendCode"
      >
        ارسال مجدد
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// OTP fields
const otp = ref(["", "", "", "", "", ""])
const otpRefs = ref([])

function handleInput(e, index) {
  const val = e.target.value.replace(/[^0-9]/g, '')
  otp.value[index] = val
  e.target.value = val

  if (val && index < 5) {
    otpRefs.value[index + 1].focus()
  }
}

function handleBackspace(e, index) {
  if (!otp.value[index] && index > 0) {
    otpRefs.value[index - 1].focus()
  }
}

// TIMER (2 minutes)
const timer = ref(120)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    if (timer.value > 0) timer.value--
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

// Time formatted
const formattedTime = computed(() => {
  const m = Math.floor(timer.value / 60)
  const s = timer.value % 60
  return `${m}:${s < 10 ? '0' : ''}${s}`
})

// Circular timer
const circumference = 2 * Math.PI * 30
const dashOffset = computed(() => (timer.value / 120) * circumference)

// resend code
function resendCode() {
  timer.value = 120
  otp.value = ["", "", "", "", "", ""]
  otpRefs.value[0].focus()
}

// verify OTP
function verifyOtp() {
  const code = otp.value.join('')
  console.log('کد وارد شده:', code)
  alert('کد تایید شد!')
}
</script>

<style scoped>
.otp-input {
  width: 45px;
  height: 45px;
  border: 2px solid #ccc;
  font-size: 20px;
  outline: none;
  transition: border-color 0.2s;
}
.otp-input:focus {
  border-color: #0d6efd;
}
</style>
