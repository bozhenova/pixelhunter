const countLives = (game, settings) => {
  if (typeof game.lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (game.lives === settings.DEAD) {
    return settings.FAIL;
  }

  return { ...game, lives: game.lives - 1 };
};

export default countLives;