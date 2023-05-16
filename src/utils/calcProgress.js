const calcProgress = (arr, uploaded) => {
  const percent = arr.flat();
  if (uploaded) {
    return 100;
  }
  return percent.length / 100;
};
export default calcProgress;
