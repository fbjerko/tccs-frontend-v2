import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FeedView from '../views/FeedView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      pageTitle: 'Home',
    },
  },
  {
    path: '/feed',
    name: 'Feed',
    component: FeedView,
    meta: {
      pageTitle: 'Picture Feed',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
