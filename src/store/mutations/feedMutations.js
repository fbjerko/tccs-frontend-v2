export const ADD_FEED_ITEM = 'ADD_FEED_ITEM';

export default {
  [ADD_FEED_ITEM](state, payload) {
    state.feed = [...state.feed, payload];
  },
};
