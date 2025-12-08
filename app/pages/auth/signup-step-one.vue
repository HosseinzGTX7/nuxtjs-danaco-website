<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow-sm p-4 shadow-lg rounded-5" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-2">ثبت شماره تلفن</h2>
      <p class="text-center text-muted mb-4 small">لطفا شماره همراه خود را وارد کنید</p>

      <Form :validation-schema="schema" @submit="handleSubmit">
        <div class="mb-3">
          <label for="mobile" class="form-label">شماره تلفن</label>
          <div class="input-group flex-row-reverse">
            <span class="input-group-text p-2 border-0 bg-transparent">
              <i class="bi bi-telephone"></i>
            </span>

            <Field
              id="mobile"
              name="mobile"
              type="tel"
              class="form-control text-end rounded-4"
              placeholder="شماره تلفن خود را وارد کنید"
              style="direction: rtl;"
            />
          </div>
          <ErrorMessage name="mobile" class="text-danger small mt-1" />
        </div>

        <button type="submit" class="btn btn-primary w-100 rounded-4 mb-2">ادامه</button>

        <p class="text-center">
          <NuxtLink to="/auth/login" class="text-decoration-none">بازگشت به صفحه ورود</NuxtLink>
        </p>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'

const router = useRouter()

const schema = yup.object({
  mobile: yup.string()
    .required('شماره تلفن الزامی است')
    .matches(/^09\d{9}$/, 'شماره تلفن باید با 09 شروع شود و 11 رقم باشد'),
})

function handleSubmit(values) {
  router.push({ path: '/auth/otp-verify' })
}
</script>