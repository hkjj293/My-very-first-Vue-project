import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import * as components from './components/Imports'

const app = createApp(App);
Object.entries(components).forEach(([compName, comp]) => {
  app.component(comp.name || compName, comp);
});
app.mount('#app');
// From Creating an Application
app.config.errorHandler = (err) => {
  /* handle error */
}


