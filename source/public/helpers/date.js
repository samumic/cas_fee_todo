function getFormattedDateFull() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.toLocaleString('default', { weekday: 'long' });

  return `${day}, ${month} ${date.getDate()}`;
}

export default getFormattedDateFull;
