import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches
) {
  document.documentElement.setAttribute('data-theme', 'light');
} else {
  document.documentElement.setAttribute('data-theme', 'night');
}
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
