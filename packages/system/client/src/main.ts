import { createApp } from 'vue'
import App from './ProviderConfig.vue'
import store from './store'

import 'virtual:windi.css'

const app = createApp(App)
app.mount('#app')
app.use(store)
