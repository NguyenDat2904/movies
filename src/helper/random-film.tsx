function getRandomFilms(films: [], count: number) {
  // Clone the original array to avoid modifying it
  const clonedFilms = [...films];

  // Shuffle the array
  for (let i = clonedFilms.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clonedFilms[i], clonedFilms[j]] = [clonedFilms[j], clonedFilms[i]];
  }

  // Return the first `count` elements
  return clonedFilms.slice(0, count);
}
export default getRandomFilms;
