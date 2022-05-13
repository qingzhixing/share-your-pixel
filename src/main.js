import "./script/index.js";
import { createApp } from 'vue';
import App from './App.vue';

const app=createApp(App);

//router
import router from "./script/router/router";
app.use(router);

//NutUI
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
app.use(NutUI);

//ArcoDesign
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
app.use(ArcoVue);

app.mount('#app');
