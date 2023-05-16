export const minutesToHours = (min) => {
  let hours = Math.floor(min / 60);
  if (hours < 10) hours = `0${hours}`;
  let minutes = Math.floor(min % 60);
  if (minutes < 10) minutes = `0${minutes}`;
  return `${hours}ч ${minutes}м`;
};

export const departureArrive = (data, duration) => {
  const d1 = new Date(data);
  const d2 = new Date(d1.getTime() + duration * 60000);
  let d1Hours = d1.getHours();
  if (d1Hours < 10) d1Hours = `0${d1Hours}`;
  let d1Minutes = d1.getMinutes();
  if (d1Minutes < 10) d1Minutes = `0${d1Minutes}`;

  let d2Hours = d2.getHours();
  if (d2Hours < 10) d2Hours = `0${d2Hours}`;
  let d2Minutes = d2.getHours();
  if (d2Minutes < 10) d2Minutes = `0${d2Minutes}`;

  return `${d1Hours}:${d1Minutes} - ${d2Hours}:${d2Minutes}`;
};
