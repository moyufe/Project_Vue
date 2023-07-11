import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

//element
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './styles/element/index.scss'

import pinia from './store'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia).use(router).use(ElementPlus).mount('#app')
