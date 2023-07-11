import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.less'
// import './style.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import App from './App.vue'

import router from './router'

createApp(App).use(router).use(pinia).mount('#app')
