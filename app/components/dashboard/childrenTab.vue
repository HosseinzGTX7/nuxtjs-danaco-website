<template>
  <div class="children-tab">

    <!-- لیست فرزندان -->
    <div class="row g-4">
      <div v-for="(child, index) in children" :key="index" class="col-md-4 col-sm-6">
        <div class="card text-center shadow-sm p-3">
          <img
            :src="child.photo || '/images/IMG_20251005_131531_940.webp'"
            class="rounded-circle mx-auto mb-3"
            style="width:100px; height:100px; object-fit:cover;"
            alt="Child photo"
          />
          <h5 class="fw-bold mb-1">{{ child.firstName }} {{ child.lastName }}</h5>
          <p class="text-muted mb-1">{{ child.age }} ساله</p>
          <p class="text-muted">{{ child.gender === 'male' ? 'پسر' : 'دختر' }}</p>

          <div class="d-flex justify-content-center gap-3 mt-2">
            <button class="btn btn-sm btn-outline-primary" @click="editChild(index)">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger" @click="deleteChild(index)">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- دکمه افزودن -->
      <div class="col-md-4 col-sm-6">
        <div
          class="card text-center border-dashed p-4 d-flex align-items-center justify-content-center"
          style="cursor:pointer; height: 285px;"
          @click="openAddModal"
        >
          <i class="bi bi-plus-circle fs-1 text-secondary"></i>
          <p class="mt-2 text-muted">افزودن فرزند</p>
        </div>
      </div>
    </div>

    <!-- مودال افزودن / ویرایش -->
    <div
      class="modal fade"
      id="childModal"
      tabindex="-1"
      aria-labelledby="childModalLabel"
      aria-hidden="true"
      ref="modalRef"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="childModalLabel">
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              {{ isEditing ? 'ویرایش اطلاعات فرزند' : 'افزودن فرزند جدید' }}
            </h5>
          </div>

          <Form :validation-schema="schema" @submit="saveChild">
            <div class="modal-body">
              <!-- عکس -->
              <div class="mb-3 text-center">
                <img
                  :src="values.photo || '/images/computer-icons-user-profile.png'"
                  class="rounded-circle mb-4"
                  style="width:100px;height:100px;object-fit:cover;"
                />
                <input
                  type="file"
                  class="form-control"
                  @change="onPhotoChange"
                />
                <ErrorMessage name="photo" class="text-danger text-start small mt-1"/>
              </div>

              <!-- نام -->
              <div class="mb-3">
                <label class="form-label">نام</label>
                <Field name="firstName" class="form-control"/>
                <ErrorMessage name="firstName" class="text-danger small mt-1"/>
              </div>

              <!-- نام خانوادگی -->
              <div class="mb-3">
                <label class="form-label">نام خانوادگی</label>
                <Field name="lastName" class="form-control"/>
                <ErrorMessage name="lastName" class="text-danger small mt-1"/>
              </div>

              <!-- سن -->
              <div class="mb-3">
                <label class="form-label">سن</label>
                <Field name="age" type="number" class="form-control"/>
                <ErrorMessage name="age" class="text-danger small mt-1"/>
              </div>

              <!-- جنسیت -->
              <div class="mb-3">
                <label class="form-label">جنسیت</label>
                <Field name="gender" as="select" class="form-select">
                  <option value="male">پسر</option>
                  <option value="female">دختر</option>
                </Field>
                <ErrorMessage name="gender" class="text-danger small mt-1"/>
              </div>

              <!-- تاریخ تولد -->
              <div class="mb-3">
                <label class="form-label">تاریخ تولد</label>
                <Field name="birthDate" v-slot="{ field }">
                  <DatePicker
                    v-bind="field"
                    format="jYYYY/jMM/jDD"
                    placeholder="انتخاب تاریخ تولد"
                    class="form-control"
                    color="#42b983"
                  />
                </Field>
                <ErrorMessage name="birthDate" class="text-danger small mt-1"/>
              </div>

              <!-- شماره تماس -->
              <div class="mb-3">
                <label class="form-label">شماره تماس</label>
                <Field name="phone" class="form-control" placeholder="مثلاً 09123456789"/>
                <ErrorMessage name="phone" class="text-danger small mt-1"/>
              </div>

              <!-- کد ملی -->
              <div class="mb-3">
                <label class="form-label">کد ملی</label>
                <Field name="nationalId" class="form-control" maxlength="10"/>
                <ErrorMessage name="nationalId" class="text-danger small mt-1"/>
              </div>

              <!-- توضیحات -->
              <div class="mb-3">
                <label class="form-label">توضیحات</label>
                <Field name="description" as="textarea" class="form-control" rows="3"/>
                <ErrorMessage name="description" class="text-danger small mt-1"/>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
              <button type="submit" class="btn btn-primary" :disabled="Object.keys(errors).length">تایید</button>
            </div>
          </Form>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useForm, Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { validateIranianNationalId } from '~/utils/validateNationalId'

const children = ref([
  { firstName: 'محمد', lastName: 'رضایی', age: 7, gender: 'male', photo: '', birthDate: '', phone: '', nationalId: '', description: '' },
  { firstName: 'نگار', lastName: 'احمدی', age: 5, gender: 'female', photo: '', birthDate: '', phone: '', nationalId: '', description: '' }
])

const isEditing = ref(false)
const editingIndex = ref(null)
const modalRef = ref(null)
let bsModal = null

const schema = yup.object({
  firstName: yup.string().required('نام الزامی است'),
  lastName: yup.string().required('نام خانوادگی الزامی است'),
  age: yup.number().typeError('سن باید عدد باشد').min(1,'سن باید بین ۱ تا ۱۲ باشد').max(12,'سن باید بین ۱ تا ۱۲ باشد').required('سن الزامی است'),
  gender: yup.string().oneOf(['male','female']),
  photo: yup.mixed().required('بارگذاری عکس الزامی است'),
  birthDate: yup.string().required('تاریخ تولد الزامی است'),
  phone: yup.string().matches(/^09\d{9}$/,'شماره تماس معتبر نیست').required('شماره تماس الزامی است'),
  nationalId: yup.string().required('کد ملی الزامی است').test('is-valid','کد ملی معتبر نیست', value => validateIranianNationalId(value)),
  description: yup.string().nullable()
})

const { handleSubmit, resetForm, setValues, values, errors, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    firstName:'', lastName:'', age:'', gender:'male', photo:'', birthDate:'', phone:'', nationalId:'', description:''
  }
})

onMounted(async () => {
  const bootstrap = await import('bootstrap')
  if (modalRef.value) bsModal = new bootstrap.Modal(modalRef.value)
})

const openAddModal = () => {
  isEditing.value = false
  resetForm()
  openModal()
}

const editChild = (index) => {
  isEditing.value = true
  editingIndex.value = index
  setValues({ ...children.value[index] })
  openModal()
}

const deleteChild = (index) => {
  children.value.splice(index,1)
}

const saveChild = handleSubmit((formData) => {
  if(isEditing.value){
    children.value[editingIndex.value] = { ...formData }
  }else{
    children.value.push({ ...formData })
  }
  closeModal()
})

const onPhotoChange = (e) => {
  const file = e.target.files[0]
  if(file){
    const reader = new FileReader()
    reader.onload = () => {
      setFieldValue({ ...values, photo: reader.result })
    }
    reader.readAsDataURL(file)
  }
}

const openModal = () => nextTick(()=>bsModal?.show())
const closeModal = () => bsModal?.hide()
</script>

<style scoped>
.border-dashed { border: 2px dashed #ccc; border-radius: 10px; }
.children-tab .card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.children-tab .card:hover { transform: translateY(-5px); box-shadow: 0 6px 15px rgba(0,0,0,0.1); }
</style>
