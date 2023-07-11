import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.less'
// import './style.css'

import { createPinia } from 'pinia'
const pinia = createPinia()

import App from './App.vue'

import router from './router'

createApp(App).use(router).use(pinia).mount('#app')
