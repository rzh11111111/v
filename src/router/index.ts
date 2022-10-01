import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'LoginPage',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/',
        name: 'IndexPage',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/vueUse',
        name: 'VueUse',
        meta: {
            title: 'vueUse demo',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/vueUse.vue')
    },
    {
        path: '/request',
        name: 'RequestPage',
        meta: {
            title: 'request demo',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/request.vue')
    },
    {
        path: '/toref',
        name: 'toref',
        meta: {
            title: 'toref demo',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/toref.vue')
    },
    {
        path: '/defineprops',
        name: 'defineprops',
        meta: {
            title: '组件通信',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/defineprops.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
