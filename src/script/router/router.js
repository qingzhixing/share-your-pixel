import HomePage from "@/pages/HomePage";
import {createRouter, createWebHashHistory} from "vue-router";

const routes=[
    {path: '/', component: HomePage},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
