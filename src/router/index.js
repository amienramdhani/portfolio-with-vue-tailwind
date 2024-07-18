import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import SkillView from '@/views/SkillView.vue';
import WorkView from '@/views/WorkView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: HomeView,
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: AboutView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillView,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
  ],
});

export default router;
