import { createApp } from 'vue'

import App from '../src/App.vue'
import 'windi.css'

import EditorjsOutput from './index'

createApp(App).use(EditorjsOutput).mount('#app')
