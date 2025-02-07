import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import NewsPage from '../views/NewsPage.vue'
import NewsOpen1 from '../views/NewsOpen1.vue'
import NewsOpen2 from '../views/NewsOpen2.vue'
import ProfilePage from '../views/ProfilePage.vue'
import AuthPage from '../views/AuthPage.vue'
import CallbackPage from '../views/CallbackPage.vue'
import FAQPage from '../views/FAQPage.vue'
import ReviewDetail from '../views/ReviewDetail.vue'
import AboutUsPage from '../views/AboutUsPage.vue'
import AuthorsPage from '../views/AuthorsPage.vue'
import RatingPage from '../views/RatingPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/news', component: NewsPage },
  { path: '/news/open1', component: NewsOpen1 },
  { path: '/news/open2', component: NewsOpen2 },
  { path: '/profile', component: ProfilePage},
  { path: '/auth', component: AuthPage},
  { path: '/callback', component: CallbackPage},
  { path: '/faq', component: FAQPage},
  { path: '/review/:id/', component: ReviewDetail},
  { path: '/about_us', component: AboutUsPage},
  { path: '/authors', component: AuthorsPage},
  { path: '/rating', component: RatingPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
