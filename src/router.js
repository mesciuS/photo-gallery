import { createRouter, createWebHistory } from "vue-router";
import AppHome from './views/AppHome.vue';
import AppGallery from './views/AppGallery.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: AppGallery,
        },
    ]
});

export {router};