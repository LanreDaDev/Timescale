const superHeroes = require("./super-heroes.json");

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  heroes = superHeroes.filter((hero) => hero.publisher === "Marvel Comics");
  return heroes;
};

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  superHeroes.forEach((hero) => {
    var tempCharacterArray = hero.characters.split(",");
    hero.characters = tempCharacterArray;
  });
  heroes = superHeroes;
  return heroes;
};

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  const marvel = superHeroes.filter(
    (hero) => hero.publisher === "Marvel Comics"
  );
  const DC = superHeroes.filter((hero) => hero.publisher === "DC Comics");
  heroes = { "Marvel Comics": marvel, "DC Comics": DC };
  return heroes;
};

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  const tempDCArray = [];
  superHeroes.forEach((hero) => {
    if (hero.characters.length > 1 && hero.publisher === "DC Comics") {
      tempDCArray.push(hero);
    }
    return tempDCArray;
  });
  heroes = tempDCArray;
  return heroes;
};

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
};
