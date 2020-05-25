<template>
  <list-item :text="currentItem.text"
             :image="currentItem.image"
             :timestamp="currentItem.datetime"/>
</template>

<script>
import ListItem from '@/components/feed/ListItem.vue';
import { GET_ITEM_BY_ID } from '@/store/getters/feedGetters';
import { mapGetters } from 'vuex';

export default {
  name: 'SingleItemView',
  components: { ListItem },
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters([GET_ITEM_BY_ID]),
    currentItem() {
      return this[GET_ITEM_BY_ID](this.id);
    },
  },
};
</script>

<style scoped>

</style>
