import { App } from 'vue'
import c from './EditorjsBlocks.vue'

c.install = (Vue: App) => {
  Vue.component(c.name, c)
}

export default c
