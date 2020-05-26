const convertFirebaseItemsToArray = (json) => {
  const ids = Object.keys(json);
  return ids.map((id) => ({
    ...json[id],
    id,
  }));
};

export default convertFirebaseItemsToArray;
