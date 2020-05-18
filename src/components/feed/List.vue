<template>
  <v-container fluid>
    <v-row class="flex-column" align="center">
      <v-col cols="6" xl="4">
        <v-btn :to="{ name: 'Add' }">
          Add new item
        </v-btn>
      </v-col>
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
import { mapState } from 'vuex';
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
};
</script>

<style scoped>

</style>
