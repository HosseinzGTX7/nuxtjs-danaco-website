import { defineStore } from 'pinia'
import articles from '~/data/articles.js'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    articles: articles // داده‌ها مستقیم از فایل data/articles.js
  }),
  getters: {
    getArticleBySlug: (state) => (slug) => {
      return state.articles.find(a => a.slug === slug)
    },
    getArticleByIdAndSlug: (state) => (id, slug) => {
      return state.articles.find(a => a.id === id && a.slug === slug)
    }
  }
})
