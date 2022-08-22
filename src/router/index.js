import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/dashbord',
      component: () => import('../views/Dashbord.vue'),
    },
    {
      path: '/colors',
      component: () => import('../views/Colors.vue'),
    },
    {
      path: '/tipography',
      component: () => import('../views/Tipography.vue'),
    },
    {
      path: '/charts',
      component: () => import('../views/Charts.vue'),
    },
    {
      path: '/docs',
      component: () => import('../views/Docs.vue'),
    },
    {
      path: '/try_core',
      component: () => import('../views/Try_core.vue'),
    },
  ],
});

export default router;
