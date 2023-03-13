// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/Landing.vue'),
    meta: { title: "Anna Hoang - Full-stack Developer's page" },
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: "Anna Hoang - Full-stack Developer's page" },
  },

  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/Resume.vue'),
    meta: { title: 'Anna Hoang - Full-stack Developer resume' },
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
  document.title = to.meta.title;
});

export default router;
