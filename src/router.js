import Vue from 'vue';
import Router from 'vue-router';
import Goods from './views/Goods.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/goods',
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
    },
  ],
});
