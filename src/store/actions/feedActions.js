import { ADD_FEED_ITEM } from '@/store/mutations/feedMutations';

export const SUBMIT_ITEM = 'submitItem';

export default {
  [SUBMIT_ITEM]({ commit }, listItem) {
    commit(ADD_FEED_ITEM, listItem);
  },
};
