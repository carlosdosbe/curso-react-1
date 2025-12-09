import { heroes, type Hero } from "../data/heroes.data";
import { type Owner } from "../data/heroes.data";

console.log("ARCHIVO 8 - IMPORTS & EXPORTS");

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  /*
  if (!hero) {
    throw new Error(`Hero with id ${id} not found`);
  }
    */

  return hero;
};

console.log(getHeroById(1));
console.log(getHeroById(14));

console.log("TAREA - getHeroByOwner");

const getHeroByOwner = (owner: Owner) => {
  const ownerHeros = heroes.filter((hero) => hero.owner === owner);
  return ownerHeros;
};

console.log(getHeroByOwner("Marvel"));
