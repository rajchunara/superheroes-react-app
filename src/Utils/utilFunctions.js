export const findTheMaxIdFromSuperheroes = (superheroesArray) => {
  let idArray = superheroesArray.map((hero) => hero.id);

  return Math.max(...idArray);
};
