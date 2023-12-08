import { createRouter, createWebHistory } from 'vue-router';
import ProductListLogin from '../views/ProductListLogin.vue';
import ProductList from '../views/ProductList.vue';

const routes = [
    {
        path: '/',
        name: 'ProductListLogin',
        component: ProductListLogin
    },
    {
        path: '/ProductList',
        name: 'ProductList',
        component: ProductList
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
