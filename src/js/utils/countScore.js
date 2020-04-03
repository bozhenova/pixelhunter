const countScore = (answers, lives, settings) => {

  if (!Array.isArray(answers)) {
    throw new Error(`Answers should be of type array`);
  }

  if (answers.length < settings.maxLevel) {
    return settings.fail;
  }

  const correctAnswers = answers.filter(answer => answer.result === true);

  let score = 0;

  for (const answer of correctAnswers) {
    if (answer.time > settings.maxTime) {
      score += settings.fastAnswerBonus;
    } else if (answer.time < settings.minTime) {
      score -= settings.slowAnswerFair;
    }
    score += settings.correctAnswerBonus;
  }
  return score + lives * settings.savedLifeBonus;

}

export default countScore;