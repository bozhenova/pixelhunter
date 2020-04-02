const countScore = (answers, lives, settings) => {
  let correctAnswerPoints = 0;
  let slowAnswersFair = 0;
  let fastAnswersBonus = 0;
  let fastAnswersNumber = 0;
  let slowAnswersNumber = 0;
  const livesBonus = lives * settings.SAVED_LIVE_BONUS;

  if (!Array.isArray(answers)) {
    throw new Error(`Answers should be of type array`);
  }
  if (answers.includes('unknown')) {
    return settings.FAIL;
  }

  answers.forEach(answer => {
    switch (answer) {
      case `fast`:
        fastAnswersNumber++;
        fastAnswersBonus += settings.FAST_ANSWER_BONUS;
        break;
      case `slow`:
        slowAnswersNumber++;
        slowAnswersFair += settings.SLOW_ANSWER_FAIR;
        break;
    }

    if (answer !== `wrong`) {
      correctAnswerPoints += settings.CORRECT_ANSWER_BONUS;
    }
  });


  let score = livesBonus + correctAnswerPoints + fastAnswersBonus - slowAnswersFair;
  const stats = { score, fastAnswersNumber, slowAnswersNumber, livesBonus, lives, fastAnswersBonus, slowAnswersFair, correctAnswerPoints };
  return stats;
}

export default countScore;