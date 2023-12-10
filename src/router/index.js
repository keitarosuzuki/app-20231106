import { createRouter, createWebHistory } from 'vue-router';
import ProductListLogin from '../views/ProductListLogin.vue';
// import ProductList from '../views/ProductList.vue';
import Todolist from '../views/products/TodoList.vue';

const routes = [
    {
        path: '/',
        name: 'ProductListLogin',
        component: ProductListLogin
    },
    {
        path: '/productlist',
        name: 'ProductList',
        component: ProductListLogin
    },
    {
        path: '/todolist',
        name: 'Todolist',
        component: Todolist
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
