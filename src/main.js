import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './style.css'
import router from './router' // Import the router

createApp(App)
  .use(router) // Use the router
  .use(MotionPlugin) // Use the MotionPlugin
  .mount('#app')