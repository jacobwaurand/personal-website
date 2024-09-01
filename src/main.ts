import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import fontawesome from './fontawesome';

const app = createApp(App);
app.use(fontawesome)
app.mount('#app')
