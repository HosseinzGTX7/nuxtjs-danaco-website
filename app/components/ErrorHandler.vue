<template>
  <div v-if="error" class="error-handler">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <div class="alert alert-danger">
            <h4 class="alert-heading">خطا</h4>
            <p class="mb-3">{{ errorMessage }}</p>
            <button @click="handleRetry" class="btn btn-outline-danger me-2">
              تلاش مجدد
            </button>
            <button @click="handleGoHome" class="btn btn-primary">
              صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null
  }
})

const errorMessage = computed(() => {
  if (!props.error) return ''
  
  const statusCode = props.error.statusCode
  const messages = {
    400: 'درخواست نامعتبر',
    401: 'دسترسی غیرمجاز',
    403: 'دسترسی ممنوع',
    404: 'صفحه یافت نشد',
    500: 'خطای سرور',
    503: 'سرویس در دسترس نیست'
  }
  
  return messages[statusCode] || 'خطای ناشناخته رخ داده است'
})

const handleRetry = () => {
  clearError()
}

const handleGoHome = () => {
  navigateTo('/')
}
</script>

<style scoped>
.error-handler {
  padding: 2rem 0;
}
</style>