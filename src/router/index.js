import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../views/ProductList.vue';
import Todolist from '../views/products/TodoList.vue';

const routes = [
    {
        path: '/',
        name: 'ProductList',
        component: ProductList
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
