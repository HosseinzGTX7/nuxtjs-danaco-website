<template>
  <transition name="drawer-fade">
    <div v-if="modelValue" class="drawer-overlay" @click.self="closeDrawer">
      <div
        class="drawer-content"
        :class="['drawer-' + side]"
      >
        <div class="drawer-header d-flex justify-content-between align-items-center border-bottom px-3 py-2">
          <slot name="header">
            <h5 class="mb-0">{{ title }}</h5>
          </slot>
          <button class="btn btn-sm btn-outline-secondary" @click="closeDrawer">
            <i class="bi bi-x-lg"/>
          </button>
        </div>

        <div class="drawer-body p-3">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: ''
  },
  side: {
    type: String,
    default: 'bottom' // right | left | bottom | top
  }
})

const emit = defineEmits(['update:modelValue'])

const closeDrawer = () => emit('update:modelValue', false)
</script>

<style scoped>
/* --- پس‌زمینه نیمه‌شفاف --- */
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1050;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

/* --- محتوای اصلی --- */
.drawer-content {
  background: #fff;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* --- از پایین باز شود --- */
.drawer-bottom {
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  /* 🔹 کلید داینامیک شدن اندازه */
  max-height: 90vh;
  height: auto; /* اجازه بده بر اساس محتوا تنظیم بشه */
  overflow: hidden;

  animation: slideUp 0.3s ease-out;
}

/* بدنه Drawer با اسکرول */
.drawer-body {
  overflow-y: auto;
  max-height: calc(90vh - 60px); /* کم کردن ارتفاع هدر */
}

/* برای دسکتاپ از راست */
.drawer-right {
  height: 100%;
  width: 80%;
  margin-left: auto;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

/* --- انیمیشن fade --- */
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.3s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

/* --- انیمیشن slide up --- */
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* --- اسکرول ظریف --- */
.drawer-body::-webkit-scrollbar {
  width: 6px;
}
.drawer-body::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 3px;
}
</style>
