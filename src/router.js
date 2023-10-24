import { createRouter, createWebHistory } from "vue-router";
import AppHome from './views/AppHome.vue';
import AppGallery from './views/AppGallery.vue';
import AppAbout from './views/AppAbout.vue';
import AppProjects from './views/AppProjects.vue';
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
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects,
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