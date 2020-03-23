const countLives = (game, settings) => {
  if (typeof game.lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (game.lives === settings.dead) {
    return settings.fail;
  }

  // clone game object and change lives property
  return { ...game, lives: game.lives - 1 };
};

export default countLives;