import { App } from 'vue'
import chooseArea from './chooseArea'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import progress from './progress'
import chooseCity from './chooseCity'
import form from './form'
import modalForm from './modalForm'
import table from './table'

const components = [
  chooseArea,
  trend,
  notification,
  list,
  menu,
  chooseTime,
  chooseDate,
  chooseCity,
  progress,
  form,
  modalForm,
  table
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}
