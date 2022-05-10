import { createApp } from 'vue';
import App from './App.vue';

const app=createApp(App);

//router
import router from "./script/router/router";
app.use(router);

app.mount('#app');
