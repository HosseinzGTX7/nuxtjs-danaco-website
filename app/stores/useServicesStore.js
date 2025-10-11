import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => ({
    services: [
      {
        title: 'ورودی ساعتی',
        description: 'دسترسی کامل به فضای بازی و امکانات آموزشی.',
        price: '50,000',
        image: '/images/IMG_20251005_163552_671.png'
      },
      {
        title: 'جشن تولد',
        description: 'برگزاری جشن تولد با دکوراسیون و پذیرایی کامل.',
        price: '500,000',
        image: '/images/IMG_20251005_163552_773.png'
      },
      {
        title: 'کارگاه آموزشی',
        description: 'شرکت در کارگاه‌های آموزشی و سرگرمی.',
        price: '150,000',
        image: '/images/IMG_20251005_163553_055.png'
      }
    ],
    priceList: [
      { name: 'ورودی ساعتی', price: '50,000' },
      { name: 'جشن تولد', price: '500,000' },
      { name: 'کارگاه آموزشی', price: '150,000' }
    ]
  }),
  getters: {
    getServiceByTitle: (state) => (title) => {
      return state.services.find(s => s.title === title)
    }
  }
})
