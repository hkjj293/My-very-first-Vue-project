import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App).mount('#app')

// From Creating an Application
app.config.errorHandler = (err) => {
    /* handle error */
}
