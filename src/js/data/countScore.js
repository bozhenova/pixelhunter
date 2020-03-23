const countScore = (answers, lives, settings) => {
  if (!Array.isArray(answers)) {
    throw new Error(`Answers should be of type array`);
  }
  if (answers.length < settings.maxLevel) {
    return settings.fail;
  }
  const correctAnswers = answers.filter(answer => answer.result);
  let score = 0;
  for (const answer of correctAnswers) {
    if (answer.time > settings.maxTime) {
      score += settings.bonusPoints;
    }
    score += (answer.time < settings.minTime) ? settings.bonusPoints :
      settings.pointsPerAnswer;
  }
  return score + lives * settings.bonusPoints;
};

export default countScore;