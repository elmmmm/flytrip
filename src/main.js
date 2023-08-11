import { createApp } from 'vue'
import App from './App.vue'
// 可以不写 index.js，构建工具会自动搜搜匹配的
import router from './router/index'
import pinia from './stores'

import 'normalize.css'
import './assets/css/index.css'

createApp(App).use(router).use(pinia).mount('#app')
