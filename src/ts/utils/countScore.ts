import { Settings, State } from '../data/data';

const countScore = (answers: State["answers"], lives: number, settings: Settings) => {


  if (answers.length < settings.maxLevel) {
    return settings.fail;
  }

  if (lives <= settings.dead) {
    return settings.fail;
  }

  const correctAnswers = answers.filter(answer => answer.result === true);

  let score = 0;

  for (const answer of correctAnswers) {
    if (answer.time > settings.maxTime) {
      score += settings.fastAnswerBonus;
    } else if (answer.time < settings.minTime) {
      score -= settings.slowAnswerFine;
    }
    score += settings.correctAnswerBonus;
  }
  return score + lives * settings.savedLifeBonus;

}

export default countScore;