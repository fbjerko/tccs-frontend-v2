import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    feed: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1520716497194-0bde97ce9abe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8936d0802da9d0b3554637661201471&auto=format&fit=crop&w=701&q=80',
        text: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        datetime: 1519295400,
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1520704103437-2b033fcfa64f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=595bd894ef85d6c8fbbb24e210635710&auto=format&fit=crop&w=564&q=80',
        text: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        datetime: 1519299000,
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1520722217742-5887a8cb5778?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6e82e7e3dd060b43c1301238185b12b5&auto=format&fit=crop&w=634&q=80',
        text: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        datetime: 1519381800,
      },
    ],
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
  },
  modules: {
  },
});
