import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

const app = createApp(App)
createApp(App).mount('#app')
app.use(MotionPlugin)
app.mount('#app')