import { App } from 'vue'
import c from './components'

export * from './types'

export const install = (Vue: App) => {
  const components = [c]
  for (const component in components) {
    Vue.component(components[component].name, components[component])
  }
}

export default { install }
export { default as c } from './components'
