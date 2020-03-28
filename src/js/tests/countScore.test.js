import { expect } from "chai";
import countScore from "../data/countScore.js";
import { GAME_SETTINGS } from "../data/data.js";


describe(`Counting score`, () => {
  it(`should return -1 if the number of answers is less than 10`, () => {
    const playerAnswers = [`wrong`, `correct`, `correct`, `correct`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];

    expect(countScore(playerAnswers, 3, GAME_SETTINGS)).to.equal(-1);
  });

  it(`should return 1150 points if the player answered all questions in the
    normal amount of time with 3 lives left`, () => {
    const playerAnswers = [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`];

    expect(countScore(playerAnswers, 3, GAME_SETTINGS).score).to.equal(1150);
  });

  it(`should return lower than 1150 points if the player answered the questions
    slowly and have one or two lives`, () => {
    const playerAnswers = [`slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`];

    expect(countScore(playerAnswers, 2, GAME_SETTINGS).score).to.equal(600);
    expect(countScore(playerAnswers, 1, GAME_SETTINGS).score).to.equal(550);
  });

  it(`should return more than 1150 points if the player answered all the questions quickly`, () => {
    const playerAnswers = [`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`];

    expect(countScore(playerAnswers, 3, GAME_SETTINGS).score).to.equal(1650);
    expect(countScore(playerAnswers, 2, GAME_SETTINGS).score).to.equal(1600);
    expect(countScore(playerAnswers, 1, GAME_SETTINGS).score).to.equal(1550);
  });

  it(`should not allow to set non array value`, () => {
    expect(() => countScore({}, 3)).to.throw(Error);
  });
});
