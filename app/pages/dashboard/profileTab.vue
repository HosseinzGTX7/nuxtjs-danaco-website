<template>
  <div>
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
      <button class="btn btn-outline-secondary flex-fill" @click="onChangePassword">
        تغییر رمز
      </button>
      <button class="btn btn-primary flex-fill" @click="onEditProfile">
        ویرایش پروفایل
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '~/stores/useUserStore'

const userStore = useUserStore()
const user = computed(() => userStore.user)

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
.list-group-item { background: transparent; border: 1px solid #f1f1f1; }
</style>