import { TOGGLE_LOADING, REPLACE_FEED } from '@/store/mutations/feedMutations';
import convertFirebaseItemsToArray from '@/utils/firebase-items-converter';

export const SUBMIT_ITEM = 'submitItem';
export const LOAD_FEED = 'loadFeed';

export default {
  [SUBMIT_ITEM]({ commit }, listItem) {
    commit(TOGGLE_LOADING, true);
    return fetch(process.env.VUE_APP_FIREBASE_URL, {
      method: 'POST',
      body: JSON.stringify(listItem),
    });
  },
  [LOAD_FEED]({ commit }) {
    return fetch(process.env.VUE_APP_FIREBASE_URL).then((response) => {
      if (response && response.ok) {
        return response.json();
      }
      return {};
    }).then((json) => {
      commit(REPLACE_FEED, convertFirebaseItemsToArray(json));
      commit(TOGGLE_LOADING, false);
    });
  },
};
