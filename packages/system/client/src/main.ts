import { createApp } from 'vue'
import App from './ProviderConfig.vue'
import store from './store'
const app = createApp(App)
app.mount('#app')
app.use(store)
