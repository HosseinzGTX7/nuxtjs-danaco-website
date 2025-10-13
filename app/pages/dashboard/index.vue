<template>
  <section class="container my-5" dir="rtl">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <div class="card shadow-sm p-4">

          <!-- آواتار و اطلاعات کاربر -->
          <div class="text-center">
            <img :src="user?.avatar || '/images/default-avatar.webp'" class="rounded-circle mb-3" style="width:120px;height:120px;object-fit:cover"/>
            <h3 class="fw-bold mb-0">{{ user?.name || 'کاربر ناشناس' }}</h3>
            <p class="text-muted mb-3">{{ user?.email }}</p>
          </div>

          <!-- تب‌ها -->
          <ul class="nav nav-pills justify-content-center mb-4 flex-wrap">
            <li class="nav-item" v-for="tab in tabs" :key="tab.key">
              <button class="nav-link" :class="{active: activeTab===tab.key}" @click="activeTab=tab.key">
                {{ tab.label }}
              </button>
            </li>
          </ul>

          <!-- محتوای تب‌ها -->
          <div>

            <ProfileTab v-if="activeTab==='profile'" />
            <WalletTab v-if="activeTab==='wallet'" :walletBalance="walletBalance" :transactions="transactions" @open-modal="openModal"/>
            <HistoryTab v-if="activeTab==='history'"/>
            <ChildrenTab v-if="activeTab === 'children'"/>
            <RewardsTab v-if="activeTab === 'rewards'"/>
            <MessagesTab v-if="activeTab === 'messages'"/>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '~/stores/useUserStore'
import ProfileTab from '~/pages/dashboard/profileTab.vue'
import WalletTab from '~/pages/dashboard/walletTab.vue'
import HistoryTab from '~/pages/dashboard/historyTab.vue'
import ChildrenTab from '~/pages/dashboard/childrenTab.vue'
import RewardsTab from '~/pages/dashboard/rewardsTab.vue'
import MessagesTab from '~/pages/dashboard/messagesTab.vue'

const userStore = useUserStore()
const user = computed(() => userStore.user)

const tabs = [
  { key: 'profile', label: 'اطلاعات کاربر' },
  { key: 'wallet', label: 'کیف پول' },
  { key: 'history', label: 'تاریخچه' },
  { key: 'children', label: 'فرزندان' },
  { key: 'rewards', label: 'امتیازها و کوپن‌ها' },
  { key: 'messages', label: 'پیغام‌ها' }
]

const activeTab = ref('profile')

// نمونه داده کیف پول
const walletBalance = ref(245000)
const transactions = ref([
  { amount: 100000, type: 'شارژ حساب', date: '1403/07/15' },
  { amount: 50000, type: 'رزرو کارگاه آموزشی', date: '1403/07/17' },
  { amount: 200000, type: 'هزینه جشن تولد', date: '1403/08/01' }
])

// باز کردن مودال از WalletTab
function openModal() {
  // در این حالت، WalletTab خودش مودال را مدیریت می‌کند، نیازی به کد اضافه نیست
}
</script>
