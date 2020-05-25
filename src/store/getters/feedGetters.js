export const GET_ITEM_BY_ID = 'getItemById';

export default {
  [GET_ITEM_BY_ID](state) {
    return (id) => {
      const { feed } = state;
      if (!feed || !Array.isArray(feed)) {
        return {};
      }
      return feed.find((item) => item.id === id) || {};
    };
  },
};
