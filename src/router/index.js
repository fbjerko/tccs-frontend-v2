import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import FeedView from '@/views/FeedView.vue';
import AddItemView from '@/views/AddItemView.vue';
import SingleItemView from '@/views/SingleItemView.vue';

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
  {
    path: '/feed/items/:id',
    name: 'Item',
    component: SingleItemView,
    props: true,
  },
  {
    path: '/add',
    name: 'Add',
    component: AddItemView,
    meta: {
      pageTitle: 'Add New Item',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
