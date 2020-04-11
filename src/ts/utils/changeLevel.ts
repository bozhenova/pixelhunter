const changeLevel = (game: object, levelNumber: number, maxLevel: number) => {

  return { ...game, level: (levelNumber >= maxLevel) ? maxLevel : ++levelNumber };
};

export default changeLevel;