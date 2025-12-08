<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow-sm p-4 shadow-lg rounded-5" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4">ثبت‌نام کاربر</h2>
      
      <Form :validation-schema="schema" :initial-values="{ terms: false }" @submit="handleRegister" v-slot="{ submitCount }">
        <div class="mb-2">
          <label for="name" class="form-label">نام و نام خانوادگی</label>
          <div class="input-group flex-row-reverse">
            <span class="input-group-text p-2 border-0 bg-transparent">
              <i class="bi bi-person"></i>
            </span>
            <Field 
              id="name"
              name="name"
              type="text"
              class="form-control text-end rounded-4"
              placeholder="نام خود را وارد کنید"
              style="direction: rtl;"
            />
          </div>
          <ErrorMessage name="name" class="text-danger small mt-1" />
        </div>

        <div class="mb-2">
          <label for="email" class="form-label">ایمیل</label>
          <div class="input-group flex-row-reverse">
            <span class="input-group-text p-2 border-0 bg-transparent">
              <i class="bi bi-envelope"></i>
            </span>
           <Field 
              id="email"
              name="email"
              type="email"
              class="form-control text-end rounded-4"
              placeholder="ایمیل خود را وارد کنید"
              style="direction: rtl;"
            />
          </div>
          <ErrorMessage name="email" class="text-danger small mt-1" />
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
              class="form-control text-end rounded-4"
              placeholder="رمز عبور"
              style="direction: rtl;"
            />
          </div>
          <ErrorMessage name="password" class="text-danger small mt-1" />
        </div>

        <div class="mb-2">
          <label for="confirmPassword" class="form-label">تکرار رمز عبور</label>
          <div class="input-group flex-row-reverse">
            <span class="input-group-text p-2 border-0 bg-transparent">
              <i class="bi bi-key"></i>
            </span>
             <Field 
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              class="form-control text-end rounded-4"
              placeholder="تکرار رمز عبور"
              style="direction: rtl;"
            />
          </div>
          <ErrorMessage name="confirmPassword" class="text-danger small mt-1" />
        </div>

        <div class="mb-3 form-check d-flex justify-content-start" style="direction: rtl;">
          <Field
            type="checkbox"
            id="terms"
            name="terms"
            class="form-check-input me-1 ms-2"
            :value="true"
            :unchecked-value="false"
          />
          <label class="form-check-label" for="terms">با قوانین سایت موافقم</label>
          <ErrorMessage v-if="submitCount > 0" name="terms" class="text-danger small mt-1" />
        </div>

        <button type="submit" class="btn btn-success w-100 rounded-4">ثبت‌نام</button>

        <p class="text-center mt-3">
          قبلاً حساب کاربری ساخته‌اید؟ 
          <NuxtLink to="/auth/login">ورود</NuxtLink>
        </p>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('نام و نام خانوادگی الزامی است').min(3, 'نام حداقل ۳ کاراکتر باشد'),
  email: yup.string().required('ایمیل الزامی است').email('ایمیل معتبر نیست'),
  password: yup.string().required('رمز عبور الزامی است').min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'تکرار رمز عبور باید با رمز عبور یکسان باشد')
    .required('تکرار رمز عبور الزامی است'),
  terms: yup.boolean().oneOf([true], 'برای ثبت‌نام باید قوانین سایت را بپذیرید')
})

function handleRegister(values) {
  console.log('فرم ثبت‌نام معتبر است، مقادیر:', values)
  alert('ثبت‌نام موفق! می‌توان ارسال کرد.')
}
</script>