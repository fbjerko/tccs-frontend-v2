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
  },
  {
    path: '/feed',
    name: 'feed',
    component: FeedView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
