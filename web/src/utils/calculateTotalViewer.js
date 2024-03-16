export function totalViewer(dataSelectedFilm) {
  if (dataSelectedFilm) {
    return dataSelectedFilm.reduce((accumulator, value) => {
      return accumulator + value.seats.length;
    }, 0);
  }
  return 0;
}
