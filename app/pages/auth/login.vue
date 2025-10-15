<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4"><i class="bi bi-box-arrow-in-right ms-1"></i>
      وارد شوید!
      </h2>
      
      <Form :validation-schema="schema" @submit="handleLogin">
        <div class="mb-2">
          <label for="mobile" class="form-label">شماره تلفن</label>
          <div class="input-group flex-row-reverse">
            <span class="input-group-text p-2 border-0 bg-transparent">
              <i class="bi bi-telephone"></i>
            </span>
            <Field 
              id="mobile"
              name="mobile"
              type="tel"
              class="form-control text-end rounded rounded-4"
              placeholder="شماره تلفن خود را وارد کنید"
              style="direction: rtl;"
            />
          </div>
          <ErrorMessage name="mobile" class="text-danger small mt-1" />
        </div>

        <div class="mb-2">
          <label for="password" class="form-label">رمز عبور</label>
          <div class="input-group flex-row-reverse">
            <span class="input-group-text p-2 border-0 bg-transparent">
              <i class="bi bi-lock"></i>
            </span>
            <Field 
              id="password"
              name="password"
              type="password"
              class="form-control text-end rounded rounded-4"
              placeholder="رمز عبور"
              style="direction: rtl;"
            />
          </div>
          <ErrorMessage name="password" class="text-danger small mt-1" />
        </div>

        <div class="mb-3 form-check d-flex justify-content-start" style="direction: rtl;">
          <input type="checkbox" class="form-check-input ms-2" id="remember">
          <label class="form-check-label" for="remember">مرا به خاطر بسپار</label>
        </div>

        <button type="submit" class="btn btn-primary w-100 rounded-4">ورود</button>

        <p class="text-center mt-3">
          حساب کاربری ندارید؟ 
          <NuxtLink to="/auth/register">ثبت‌نام</NuxtLink>
        </p>
        <p class="mb-0 text-center">
          <NuxtLink to="/" class="text-decoration-none">رمز عبور خود را فراموش کرده‌اید؟</NuxtLink>
        </p>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  mobile: yup.string().required('شماره تلفن الزامی است').matches(/^09\d{9}$/, 'شماره تلفن باید با 09 شروع شود و 11 رقم باشد'),
  password: yup.string().required('رمز عبور الزامی است').min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
})

function handleLogin(values: any) {
  console.log('فرم درست است، مقادیر:', values)
  alert('فرم معتبر است! می‌توان ارسال کرد.')
}
</script>