<template>
  <section class="container my-5" dir="rtl">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <div class="card shadow-sm p-4">
          <!-- آواتار و اطلاعات کاربر -->
          <div class="text-center">
            <img
              :src="user?.avatar || '/images/default-avatar.webp'"
              class="rounded-circle mb-3"
              style="width: 120px; height: 120px; object-fit: cover"
            />
            <h3 class="fw-bold mb-0">{{ user?.name || "کاربر ناشناس" }}</h3>
            <p class="text-muted mb-3">{{ user?.email }}</p>
          </div>

          <!-- ✅ دکمه باز کردن Drawer فقط در موبایل -->
          <div class="d-md-none mb-3 text-center">
            <button
              class="btn btn-outline-primary w-100"
              @click="mobileDrawer = true"
            >
              انتخاب بخش
            </button>
          </div>

          <!-- ✅ تب‌ها فقط برای دسکتاپ -->
          <ul
            class="nav nav-pills dashboard-tabs mb-4 ps-4 flex-wrap justify-content-center d-none d-md-flex"
          >
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

          <!-- ✅ محتوای تب‌ها (همیشه داخل صفحه، هم موبایل هم دسکتاپ) -->
          <div>
            <ProfileTab v-show="activeTab === 'profile'" />
            <WalletTab
              v-show="activeTab === 'wallet'"
              :walletBalance="walletBalance"
              :transactions="transactions"
            />
            <HistoryTab v-show="activeTab === 'history'" />
            <ChildrenTab v-show="activeTab === 'children'" />
            <RewardsTab v-show="activeTab === 'rewards'" />
            <MessagesTab v-show="activeTab === 'messages'" />
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Drawer فقط مخصوص تب‌ها در موبایل -->
    <BaseDrawer v-model="mobileDrawer" side="bottom" title="انتخاب بخش">
      <div class="list-group">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="list-group-item list-group-item-action text-end"
          :class="{ active: activeTab === tab.key }"
          @click="selectMobileTab(tab.key)"
        >
          {{ tab.label }}
        </button>
      </div>
    </BaseDrawer>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "~/stores/useUserStore";

import BaseDrawer from "~/components/base/BaseDrawer.vue";

import ProfileTab from "~/components/dashboard/profileTab.vue";
import WalletTab from "~/components/dashboard/walletTab.vue";
import HistoryTab from "~/components/dashboard/historyTab.vue";
import ChildrenTab from "~/components/dashboard/childrenTab.vue";
import RewardsTab from "~/components/dashboard/rewardsTab.vue";
import MessagesTab from "~/components/dashboard/messagesTab.vue";

const userStore = useUserStore();
const user = computed(() => userStore.user);

/* تب‌ها */
const tabs = [
  { key: "profile", label: "اطلاعات کاربر" },
  { key: "wallet", label: "کیف پول" },
  { key: "history", label: "تاریخچه" },
  { key: "children", label: "فرزندان" },
  { key: "rewards", label: "امتیازها و کوپن‌ها" },
  { key: "messages", label: "پیغام‌ها" },
];

const activeTab = ref("profile");

/* Drawer موبایل */
const mobileDrawer = ref(false);

const selectMobileTab = (key) => {
  activeTab.value = key;
  mobileDrawer.value = false;
};

/* داده‌های نمونه */
const walletBalance = ref(245000);

const transactions = ref([
  { amount: 100000, type: "شارژ حساب", date: "1403/07/15" },
  { amount: 50000, type: "رزرو کارگاه آموزشی", date: "1403/07/17" },
  { amount: 200000, type: "هزینه جشن تولد", date: "1403/08/01" },
]);
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
</style>
