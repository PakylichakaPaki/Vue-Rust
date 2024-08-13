import { createApp } from 'vue'
import VueRouter from './router/index.js'
import App from './App.vue'

const app = createApp(App)
app.use(VueRouter)
app.mount('#app')
