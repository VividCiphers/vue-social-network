import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Home from '@/components/Home';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '/*', redirect: '/404',
    },
  ],
});
