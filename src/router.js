import { createRouter, createWebHistory } from "vue-router";
import AppHome from './views/AppHome.vue';
import AppGallery from './views/AppGallery.vue';
import AppBnW from './views/gallery-routes/AppBnW.vue';
import AppWildlife from './views/gallery-routes/AppWildlife.vue';
import AppLandscapes from './views/gallery-routes/AppLandscapes.vue';
import AppArtic from './views/gallery-routes/AppArtic.vue';
import AppShop from './views/AppShop.vue';
import NotFound from './views/NotFound.vue';


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
        {
            path: '/nature-in-b&w',
            name: 'bnw',
            component: AppBnW,
        },
        {
            path: '/wildlife',
            name: 'wildlife',
            component: AppWildlife,
        },
        {
            path: '/landscapes',
            name: 'landscapes',
            component: AppLandscapes,
        },
        {
            path: '/artic',
            name: 'artic',
            component: AppArtic,
        },
        {
            path: '/shop',
            name: 'shop',
            component: AppShop,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound,
            meta: {
              title: '404'
            }
        }, 
    ],
    scrollBehavior() {
        window.scrollTo(0, 0)
    }
});


export {router};