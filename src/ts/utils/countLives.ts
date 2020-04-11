const countLives = (game: object, settings: object) => {
  if (game.lives === settings.dead) {
    return settings.fail;
  }

  return { ...game, lives: game.lives - 1 };
};

export default countLives;