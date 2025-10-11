import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    items: [
      { title: 'کتابخانه جذاب', image: '/images/IMG_20251005_131532_142.webp', category: 'کتابخانه' },
      { title: 'قطار بازی', image: '/images/IMG_20251005_131532_081.webp', category: 'فضای بازی' },
      { title: 'کارگاه نقاشی', image: '/images/IMG_20251005_131532_516.webp', category: 'کارگاه' },
      { title: 'استخر توپ', image: '/images/IMG_20251005_131531_954.webp', category: 'فضای بازی' },
      { title: 'فضای بازی آزاد', image: '/images/IMG_20251005_163553_023.webp', category: 'فضای بازی' },
      { title: 'سرسره های رنگی', image: '/images/IMG_20251005_163553_056.webp', category: 'سرسره‌ها' },
      { title: 'وسایل بازی', image: '/images/IMG_20251005_131532_495.webp', category: 'کارگاه' }
    ]
  }),
  getters: {
    // گرفتن آیتم‌ها بر اساس دسته‌بندی
    itemsByCategory: (state) => {
      return (category) => {
        if (category === 'همه') return state.items
        return state.items.filter(item => item.category === category)
      }
    },
    // لیست دسته‌بندی‌های موجود
    categories: (state) => {
      const cats = state.items.map(item => item.category)
      return ['همه', ...new Set(cats)]
    }
  }
})
