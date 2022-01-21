import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store"
import lazyPlugin from 'vue3-lazy'


const app = createApp(App)
app.use(router).use(store)
  .use(lazyPlugin, {
    load: '@/src/assets/img/common/default.png',
    error: '@/src/assets/img/common/err.png'
})
app.mount('#app');




