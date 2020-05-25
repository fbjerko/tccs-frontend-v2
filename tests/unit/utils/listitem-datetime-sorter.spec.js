import sortListItemsByDatetimeDescending from '@/utils/listitem-datetime-sorter';

describe('listitem-datetime-sorter', () => {
  it('sorts list items based on datetime descending', () => {
    const shouldBeFirst = { datetime: 1517571000 };
    const shouldBeSecond = { datetime: 1517567400 };
    const shouldBeThird = { datetime: 1517481000 };

    const fakeListItems = [shouldBeSecond, shouldBeThird, shouldBeFirst];

    const sortedFakeListItems = fakeListItems.sort(sortListItemsByDatetimeDescending);

    expect(sortedFakeListItems[0]).toEqual(shouldBeFirst);
    expect(sortedFakeListItems[1]).toEqual(shouldBeSecond);
    expect(sortedFakeListItems[2]).toEqual(shouldBeThird);
  });
});
