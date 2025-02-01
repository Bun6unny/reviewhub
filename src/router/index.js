import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import NewsPage from '../views/NewsPage.vue'
import NewsOpen1 from '../views/NewsOpen1.vue'
import NewsOpen2 from '../views/NewsOpen2.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/news', component: NewsPage },
  { path: '/news/open1', component: NewsOpen1 },
  { path: '/news/open2', component: NewsOpen2 },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
