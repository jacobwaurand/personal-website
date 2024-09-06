import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import fontawesome from './fontawesome';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(fontawesome);
app.use(pinia);
app.mount('#app');
