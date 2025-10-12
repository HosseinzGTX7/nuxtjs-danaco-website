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
          style="cursor:pointer; height: 230px;"
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
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="childModalLabel">
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              {{ isEditing ? 'ویرایش اطلاعات فرزند' : 'افزودن فرزند جدید' }}
            </h5>
          </div>

          <div class="modal-body">
            <div class="mb-3 text-center">
              <img
                :src="form.photo || '/images/computer-icons-user-profile.png'"
                class="rounded-circle mb-4"
                style="width:100px;height:100px;object-fit:cover;"
              />
              <input
                type="file"
                class="form-control"
                @change="onPhotoChange"
                :class="{ 'is-invalid': errors.photo }"
              />
              <div class="invalid-feedback text-start">{{ errors.photo }}</div>
            </div>

            <div class="mb-3">
               <label class="form-label">نام</label>
               <input type="text" v-model="form.firstName" class="form-control" :class="{ 'is-invalid': errors.firstName }" />
              <div class="invalid-feedback">{{ errors.firstName }}</div>
            </div>

            <div class="mb-3">
               <label class="form-label">نام خانوادگی</label>
               <input type="text" v-model="form.lastName" class="form-control" :class="{ 'is-invalid': errors.lastName }" />
              <div class="invalid-feedback">{{ errors.lastName }}</div>
            </div>

            <div class="mb-3">
               <label class="form-label">سن</label>
               <input type="number" v-model="form.age" class="form-control" min="1" max="18" :class="{ 'is-invalid': errors.age }" />
              <div class="invalid-feedback">{{ errors.age }}</div>
            </div>

            <div class="mb-3">
              <label class="form-label">جنسیت</label>
              <select v-model="form.gender" class="form-select">
                <option value="male">پسر</option>
                <option value="female">دختر</option>
              </select>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
            <button type="button" class="btn btn-primary" @click="saveChild">
              تایید
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const children = ref([
  { firstName: 'محمد', lastName: 'رضایی', age: 7, gender: 'male', photo: '' },
  { firstName: 'نگار', lastName: 'احمدی', age: 5, gender: 'female', photo: '' }
])

const form = ref({ firstName: '', lastName: '', age: '', gender: 'male', photo: '' })
const isEditing = ref(false)
const editingIndex = ref(null)
const modalRef = ref(null)
let bsModal = null

const errors = ref({
  firstName: '',
  lastName: '',
  age: '',
  photo: ''
})

onMounted(async () => {
  const bootstrap = await import('bootstrap')
  if (modalRef.value) {
    bsModal = new bootstrap.Modal(modalRef.value)
  }
})

const openAddModal = () => {
  isEditing.value = false
  form.value = { firstName: '', lastName: '', age: '', gender: 'male', photo: '' }
  errors.value = { firstName: '', lastName: '', age: '', photo: '' }
  openModal()
}

const editChild = (index) => {
  isEditing.value = true
  editingIndex.value = index
  form.value = { ...children.value[index] }
  errors.value = { firstName: '', lastName: '', age: '', photo: '' }
  openModal()
}

const deleteChild = (index) => {
  children.value.splice(index, 1)
}

const validateForm = () => {
  let isValid = true
  errors.value = { firstName: '', lastName: '', age: '', photo: '' }

  if (!form.value.firstName.trim()) {
    errors.value.firstName = 'نام الزامی است'
    isValid = false
  }

  if (!form.value.lastName.trim()) {
    errors.value.lastName = 'نام خانوادگی الزامی است'
    isValid = false
  }

  const age = Number(form.value.age)
  if (!age || age < 1 || age > 18) {
    errors.value.age = 'سن باید بین ۱ تا ۱۸ باشد'
    isValid = false
  }

  if (!form.value.photo) {
    errors.value.photo = 'بارگذاری عکس الزامی است'
    isValid = false
  }

  return isValid
}

const saveChild = () => {
  if (!validateForm()) return

  if (isEditing.value) {
    children.value[editingIndex.value] = { ...form.value }
  } else {
    children.value.push({ ...form.value })
  }
  closeModal()
}

const onPhotoChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      form.value.photo = reader.result
      errors.value.photo = '' // پاک کردن خطا در صورت بارگذاری موفق
    }
    reader.readAsDataURL(file)
  }
}

const openModal = () => {
  nextTick(() => {
    bsModal?.show()
  })
}

const closeModal = () => {
  bsModal?.hide()
}
</script>

<style scoped>
.border-dashed {
  border: 2px dashed #ccc;
  border-radius: 10px;
}
</style>