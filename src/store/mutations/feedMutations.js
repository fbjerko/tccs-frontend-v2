export const ADD_FEED_ITEM = 'ADD_FEED_ITEM';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const REPLACE_FEED = 'REPLACE_FEED';

export default {
  [ADD_FEED_ITEM](state, payload) {
    state.feed = [...state.feed, payload];
  },
  [TOGGLE_LOADING](state, isLoadingFeed) {
    state.isLoadingFeed = isLoadingFeed;
  },
  [REPLACE_FEED](state, newFeed) {
    state.feed = newFeed;
  },
};
