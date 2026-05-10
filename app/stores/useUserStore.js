// ~/stores/useUser.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // دادهٔ فیک کاربر (قابل جایگزینی با پاسخ API بعداً)
  const user = ref({
    id: 1,
    name: 'علی رایی',
    email: 'ali@example.com',
    phone: '0912*******',
    avatar: '/images/IMG_20251005_131532_368.webp', // مسیر آواتار (داخل public/images بذار)
    joinedAt: '2024-03-12' // یا تاریخ مناسب
  })

  function loginFake(payload) {
    // payload باید شامل name,email,phone,avatar,joinedAt باشه
    user.value = { ...user.value, ...payload }
  }

  function logout() {
    user.value = null
  }

  function updateProfile(updates = {}) {
    if (user.value) Object.assign(user.value, updates)
  }

  return { user, loginFake, logout, updateProfile }
})
