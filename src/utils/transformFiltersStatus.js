const transformFiltersStatus = (filter, obj) => {
  const newObj = Object.assign(obj);
  if (obj.all === true && filter === 'all') {
    const arr = Object.entries(newObj).map((item) => [item[0], false]);
    return Object.fromEntries(arr);
  }
  if (filter === 'all') {
    const arr = Object.entries(newObj).map((item) => [item[0], true]);
    return Object.fromEntries(arr);
  }
  newObj[filter] = !newObj[filter];

  if (
    newObj.zero === false ||
    newObj.one === false ||
    newObj.two === false ||
    newObj.three === false
  ) {
    const arr = Object.entries(newObj);
    arr[0][1] = false;
    return Object.fromEntries(arr);
  }

  if (newObj.zero === true || newObj.one === true || newObj.two === true || newObj.three === true) {
    const arr = Object.entries(newObj);
    arr[0][1] = true;
    return Object.fromEntries(arr);
  }

  return newObj;
};

export default transformFiltersStatus;
