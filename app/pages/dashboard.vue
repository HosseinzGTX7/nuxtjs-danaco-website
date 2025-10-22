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
          <ul class="nav nav-pills dashboard-tabs mb-4 ps-4 flex-wrap justify-content-center">
            <li class="nav-item" v-for="tab in tabs" :key="tab.key">
              <button
                class="nav-link w-100 text-center shadow-sm rounded-pill"
                :class="{ active: activeTab === tab.key }"
                @click="activeTab = tab.key"
              >
                {{ tab.label }}
              </button>
            </li>
          </ul>

          <!-- محتوای تب‌ها -->
          <div>
            <ProfileTab v-show="activeTab === 'profile'" />
            <WalletTab v-show="activeTab === 'wallet'" :walletBalance="walletBalance" :transactions="transactions" />
            <HistoryTab v-show="activeTab === 'history'" />
            <ChildrenTab v-show="activeTab === 'children'" />
            <RewardsTab v-show="activeTab === 'rewards'" />
            <MessagesTab v-show="activeTab === 'messages'" />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '~/stores/useUserStore'
import ProfileTab from '~/components/dashboard/profileTab.vue'
import WalletTab from '~/components/dashboard/walletTab.vue'
import HistoryTab from '~/components/dashboard/historyTab.vue'
import ChildrenTab from '~/components/dashboard/childrenTab.vue'
import RewardsTab from '~/components/dashboard/rewardsTab.vue'
import MessagesTab from '~/components/dashboard/messagesTab.vue'

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

const walletBalance = ref(245000)
const transactions = ref([
  { amount: 100000, type: 'شارژ حساب', date: '1403/07/15' },
  { amount: 50000, type: 'رزرو کارگاه آموزشی', date: '1403/07/17' },
  { amount: 200000, type: 'هزینه جشن تولد', date: '1403/08/01' }
])
</script>

<style scoped>
.dashboard-tabs {
  gap: 0.5rem;
}

.dashboard-tabs .nav-item {
  flex: 1 1 auto;
  text-align: center;
  margin: 0.25rem;
}

.dashboard-tabs .nav-link {
  width: 100%;
  border-radius: 10px;
  font-size: 0.9rem;
  padding: 0.5rem 0.7rem;
  white-space: nowrap;
}

/* دسکتاپ - همه در یک ردیف */
@media (min-width: 769px) {
  .dashboard-tabs {
    display: flex;
    flex-wrap: nowrap;
  }
  
  .dashboard-tabs .nav-item {
    flex: 1;
  }
}

/*  موبایل‌های متوسط - سه ستون */
@media (max-width: 768px) and (min-width: 481px) {
  .dashboard-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .dashboard-tabs .nav-item {
    flex: 1 1 30%; /* سه دکمه در هر ردیف */
    max-width: 30%;
    margin: 0.2rem;
  }

  .dashboard-tabs .nav-link {
    font-size: 0.8rem;
    padding: 0.5rem 0.4rem;
  }
}

/* موبایل‌های کوچک - دو ستون */
@media (max-width: 480px) {
  .dashboard-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .dashboard-tabs .nav-item {
    flex: 1 1 45%; /* دو دکمه در هر ردیف */
    max-width: 45%;
    margin: 0.15rem;
  }

  .dashboard-tabs .nav-link {
    font-size: 0.75rem;
    padding: 0.4rem 0.3rem;
  }
}
</style>