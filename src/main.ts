import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import * as Icons from '@element-plus/icons'
import { toLine } from './utils'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import sunUi from '../lib/index.js'
// import sunUi from './components/index'
import '../lib/style.css'
// import chooseTime from './components/chooseTime'
const app = createApp(App)
for (let i in Icons) {
  const icon = (Icons as any)[i]
  app.component(`el-icon-${toLine(i)}`, icon)
}
app.use(router).use(ElementPlus).use(sunUi)
app.mount('#app')
