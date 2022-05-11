import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";

const routes=[
    {path: '/', component: HomePage},
    {path: '/test', component: TestPage},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
