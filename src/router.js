import Vue from 'vue';
import Router from 'vue-router';
import Shop from '@/views/Shop.vue';
import Goods from '@/views/Goods.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/shop',
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '',
          redirect: 'goods',
        },
        {
          path: 'goods',
          name: 'goods',
          component: Goods,
        },
      ],
    },
  ],
});
