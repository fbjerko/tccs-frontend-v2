import getters from '@/store/getters';
import { GET_ITEM_BY_ID } from '@/store/getters/feedGetters';

describe('getter GET_ITEM_BY_ID', () => {
  const getById = getters[GET_ITEM_BY_ID];

  it('returns item with given id', () => {
    const state = {
      feed: [
        { id: 5, dummyValue: 'five' },
        { id: 3, dummyValue: 'three' },
        { id: 6, dummyValue: 'six' },
        { id: 1, dummyValue: 'one' }],
    };

    const returnedItem = getById(state)(6);

    expect(returnedItem.id).toEqual(6);
    expect(returnedItem.dummyValue).toEqual('six');
  });

  it('returns empty object when given id does not exist', () => {
    const state = {
      feed: [
        { id: 5, dummyValue: 'five' },
        { id: 3, dummyValue: 'three' },
      ],
    };

    const returnedItem = getById(state)(1);

    expect(returnedItem).toEqual({});
  });
});
