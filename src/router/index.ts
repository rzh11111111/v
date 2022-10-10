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
        path: '/torefVue',
        name: 'torefVue',
        meta: {
            title: 'toref demo',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/torefVue.vue')
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
    },
    {
        path: '/hooksVue',
        name: 'hooksVue',
        meta: {
            title: 'mixin(hooksVue)',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/hooksVue.vue')
    },
    {
        path: '/tsLearn',
        name: 'tsLearn',
        meta: {
            title: 'mixin(tsLearn)',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/tsLearn.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
