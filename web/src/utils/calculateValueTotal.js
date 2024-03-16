export function valuetotal(dataSelectedFilm) {
  if (dataSelectedFilm) {
    return dataSelectedFilm.reduce((accumulator, item) => {
      return accumulator + item.seats.length * item.value;
    }, 0);
  }
  return 0;
}
