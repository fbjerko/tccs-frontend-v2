<template>
  <list-item :text="currentItem.text"
             :image="currentItem.image"
             :timestamp="currentItem.datetime"/>
</template>

<script>
import ListItem from '@/components/feed/ListItem.vue';
import { mapState } from 'vuex';

export default {
  name: 'SingleItemView',
  components: { ListItem },
  props: {
    id: Number,
  },
  computed: {
    ...mapState({
      currentItem(state) {
        const { feed } = state;
        if (!feed || !Array.isArray(feed)) {
          return {};
        }
        return feed.find((item) => item.id === this.id) || {};
      },
    }),
  },
};
</script>

<style scoped>

</style>
