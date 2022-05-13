import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import TestPage from "@/pages/TestPage";
import HomePage from "@/pages/HomePage";
import DiscoverPage from "@/pages/DiscoverPage";

const routes=[
    {
        path: '/',
        component: MainPage,
        children: [
            {
                path: '',
                component: HomePage
            },
            {
                path: '/discover',
                component: DiscoverPage
            },
        ],
    },
    {path: '/test', component: TestPage},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
