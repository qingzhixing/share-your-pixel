import "./script/index.js";
import { createApp } from 'vue';
import App from './App.vue';

const app=createApp(App);

//router
import router from "./script/router/router";
app.use(router);

//Arco Design
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
app.use(ArcoVue);

//Arco Design Icon
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
app.use(ArcoVueIcon);

app.mount('#app');
