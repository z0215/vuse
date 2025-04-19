import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import '~/theme/style.css'
import 'virtual:uno.css'

createApp(App).use(router).mount(document.getElementById('#app') ?? document.body)
