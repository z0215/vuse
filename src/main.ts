import { createApp } from 'vue'
import App from './App.vue'
import '~/theme/style.css'
import 'virtual:uno.css'

createApp(App).mount(document.getElementById('#app') ?? document.body)
