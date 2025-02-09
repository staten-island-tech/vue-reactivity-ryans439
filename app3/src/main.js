import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useCart } from './cartState';
import './assets/base.css';
import './assets/main.css';

const app = createApp(App);

app.provide('cart', useCart());

app.use(router);
app.mount('#app');
