import { createApp } from 'vue'
import { inklayerVuePlugin } from 'inklayer-vue'
import App from './App.vue'

const app = createApp(App)
app.use(inklayerVuePlugin)
app.mount('#app')
