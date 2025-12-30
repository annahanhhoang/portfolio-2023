// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Landing.vue'),
    meta: { title: "Anna Hoang - Front-End Developer's page" },
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: { title: "Anna Hoang - Front-End Developer's page" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title as string;
});

export default router;
