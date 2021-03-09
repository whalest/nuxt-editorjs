import { createApp } from 'vue-demi'

import App from '../src/App.vue'
import 'windi.css'

import EditorjsOutput from './index'

createApp(App).use(EditorjsOutput).mount('#app')
