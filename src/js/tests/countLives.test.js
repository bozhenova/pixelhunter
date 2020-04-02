import { expect } from "chai";
import countLives from "../utils/countLives.js";
import { INITIAL_STATE } from "../data/data.js";
import { GAME_SETTINGS } from "../data/data.js";

describe(`Counting the player lives`, () => {
  it(`should return -1 if there is no lives left`, () => {
    const testGame = {
      lives: -1
    };
    expect(countLives(testGame, GAME_SETTINGS)).to.equal(-1);
  });

  it(`should return lives value less by 1 if the answer isn't correct`, () => {
    const gameOne = {
      level: 5,
      time: 15,
      lives: 2,
      answers: []
    };
    const gameTwo = {
      level: 1,
      time: 20,
      lives: 1,
      answers: []
    };
    expect(countLives(INITIAL_STATE, GAME_SETTINGS).lives).to.equal(2);
    expect(countLives(gameOne, GAME_SETTINGS).lives).to.equal(1);
    expect(countLives(gameTwo, GAME_SETTINGS).lives).to.equal(0);
  });

  it(`should not allow to set non number value`, () => {
    expect(() => countLives({}).lives).throw(Error);
    expect(() => countLives([]).lives).throw(Error);
  });
});