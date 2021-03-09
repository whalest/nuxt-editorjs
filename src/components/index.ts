import { App } from 'vue-demi'
import c from './EditorjsBlocks.vue'

c.install = (Vue: App) => {
  Vue.component(c.name, c)
}

export default c
