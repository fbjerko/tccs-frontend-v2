<template>
  <v-container fluid>
    <v-row class="flex-column" align="center">
      <v-col cols="6" xl="4" v-for="item in sortedFeed" :key="item.id">
        <list-item :image="item.image"
                   :text="item.text"
                   :timestamp="item.datetime"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable max-len */
import sortListItemsByDatetimeDescending from '@/utils/listitem-datetime-sorter';
import ListItem from './ListItem.vue';

export default {
  name: 'List.vue',
  components: { ListItem },
  data() {
    return {
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
    };
  },
  computed: {
    sortedFeed() {
      return this.feed.slice().sort(sortListItemsByDatetimeDescending);
    },
  },
};
</script>

<style scoped>

</style>
