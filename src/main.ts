import { createApp } from 'vue-demi'
import { createRouter, createWebHistory } from 'vue-router'

import routes from 'pages-generated'
import App from './App.vue'
import 'windi.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
