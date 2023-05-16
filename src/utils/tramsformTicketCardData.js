export const transplantsTransform = (arr) => {
  if (Object.keys(arr).length > 0) {
    return arr.join(', ');
  }
  return '-';
};

export const stopTransform = (arr) => {
  if (!Object.keys(arr).length) {
    return 'НЕТ ПЕРЕСАДОК';
  }
  if (Object.keys(arr).length === 1) {
    return ' 1 ПЕРЕСАДКА';
  }
  if (Object.keys(arr).length >= 2) {
    return `${Object.keys(arr).length} ПЕРЕСАДКИ`;
  }
};
