<template>
  <v-container fluid>
    <v-row class="flex-column" align="center">
      <v-col cols="6" xl="4">
        <v-btn :to="{ name: 'Add' }">
          Add new item
        </v-btn>
      </v-col>
      <v-col cols="6" xl="4" v-for="item in sortedFeed" :key="item.id">
        <router-link :to="{ name: 'Item', params: { id: item.id } }" class="text-decoration--none">
          <list-item :image="item.image"
                     :text="item.text"
                     :timestamp="item.datetime"/>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable max-len */
import sortListItemsByDatetimeDescending from '@/utils/listitem-datetime-sorter';
import { mapState, mapActions } from 'vuex';
import { LOAD_FEED } from '@/store/actions/feedActions';
import ListItem from './ListItem.vue';

export default {
  name: 'List.vue',
  components: { ListItem },
  computed: {
    ...mapState(['feed']),
    sortedFeed() {
      return this.feed.slice().sort(sortListItemsByDatetimeDescending);
    },
  },
  methods: {
    ...mapActions([LOAD_FEED]),
  },
  mounted() {
    this[LOAD_FEED]();
  },
};
</script>

<style scoped>

  .text-decoration--none {
    text-decoration: none;
  }

</style>
