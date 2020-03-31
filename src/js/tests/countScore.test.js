import { expect } from "chai";
import countScore from "../data/countScore.js";
import { GAME_SETTINGS } from "../data/data.js";


describe(`Counting user's score`, () => {
  it(`should return -1 if the number of answers is less than 10`, () => {
    const playerAnswers = [`wrong`, `correct`, `correct`, `correct`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];

    expect(countScore(playerAnswers, 3, GAME_SETTINGS)).to.equal(-1);
  });

  it(`should return right stats object given 10 right fast answers and 3 saved lives`, () => {
    const playerAnswers = [`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`];
    expect(countScore(playerAnswers, 3, GAME_SETTINGS)).to.deep.equal(
      {
        score: 1650,
        fastAnswersNumber: 10,
        slowAnswersNumber: 0,
        livesBonus: 150,
        lives: 3,
        fastAnswersBonus: 500,
        slowAnswersFair: 0,
        correctAnswerPoints: 1000
      });
  });


  it(`should return right stats object given 10 right answers and 2 saved lives`, () => {
    const playerAnswers = [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`];
    expect(countScore(playerAnswers, 2, GAME_SETTINGS)).to.deep.equal(
      {
        score: 1100,
        fastAnswersNumber: 0,
        slowAnswersNumber: 0,
        livesBonus: 100,
        lives: 2,
        fastAnswersBonus: 0,
        slowAnswersFair: 0,
        correctAnswerPoints: 1000
      });
  });


  it(`should return right stats object given 10 right slow answers and 1 saved life`, () => {
    const playerAnswers = [`slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`];

    expect(countScore(playerAnswers, 1, GAME_SETTINGS)).to.deep.equal({
      score: 550,
      fastAnswersNumber: 0,
      slowAnswersNumber: 10,
      livesBonus: 50,
      lives: 1,
      fastAnswersBonus: 0,
      slowAnswersFair: 500,
      correctAnswerPoints: 1000
    });
  });


  it(`should not allow to set non array value`, () => {
    expect(() => countScore({}, 3)).to.throw(Error);
  });
});
