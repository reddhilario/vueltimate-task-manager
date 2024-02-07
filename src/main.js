import './assets/main.css'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')