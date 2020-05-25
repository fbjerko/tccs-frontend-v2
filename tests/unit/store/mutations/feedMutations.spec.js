// default import: importing the mutations (the actual method(s))
import mutations from '@/store/mutations';
// named import: importing the name of the specific mutation we want to test
import { ADD_FEED_ITEM } from '@/store/mutations/feedMutations';

describe('feed mutations', () => {
  const addFeedItem = mutations[ADD_FEED_ITEM];

  it('adds feed item with mutation ADD_FEED_ITEM to array already containing items', () => {
    const state = {
      feed: [
        {
          id: 1,
          image: 'someImageUrl',
          text: 'some text',
        },
      ],
    };
    const secondNewFeedItem = {
      id: 2,
      image: 'someOtherImageUrl',
      text: 'some other text',
      datetime: 1517567400,
    };

    addFeedItem(state, secondNewFeedItem);

    expect(state.feed.length).toBe(2);
    expect(state.feed[1]).toEqual(secondNewFeedItem);
  });

  it('adds feed item with mutation ADD_FEED_ITEM to array of empty items', () => {
    const state = {
      feed: [],
    };
    const newFeedItem = {
      id: 1,
      image: 'someImageUrl',
      text: 'some text',
      datetime: 1517567400,
    };

    addFeedItem(state, newFeedItem);

    expect(state.feed.length).toBe(1);
    expect(state.feed[0]).toEqual(newFeedItem);
  });
});
