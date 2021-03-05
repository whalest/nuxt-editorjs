import { App } from 'vue'
import c from './EditorjsOutput.vue'

c.install = (Vue: App) => {
  Vue.component(c.name, c)
}

export default c
