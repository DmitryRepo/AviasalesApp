const ticketsFilter = (arr, filtersStatus) => {
  const stops = {
    zeroStops: 0,
    oneStop: 1,
    twoStops: 2,
    threeStops: 3,
  };
  const stopsThatNeedToShow = [];
  if (filtersStatus.zero === true) stopsThatNeedToShow.push(stops.zeroStops);
  if (filtersStatus.one === true) stopsThatNeedToShow.push(stops.oneStop);
  if (filtersStatus.two === true) stopsThatNeedToShow.push(stops.twoStops);
  if (filtersStatus.three === true) stopsThatNeedToShow.push(stops.threeStops);

  let serveArr = [...arr];
  serveArr = serveArr.map((item) => {
    const newItem = item;
    if (!stopsThatNeedToShow.includes(item.segments[0].stops.length)) {
      newItem.visibility = false;
    } else {
      newItem.visibility = true;
    }

    return newItem;
  });
  return serveArr;
};

export default ticketsFilter;
