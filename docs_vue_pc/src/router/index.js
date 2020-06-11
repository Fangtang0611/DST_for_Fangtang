import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

const routes = [  
  {
    path: '/',
    name: 'index',
    component: () => import('@/view/index'),
    meta: {
      title: '首页',
    }
  },
  
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});


const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});


export {router};
