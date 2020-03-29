import { expect } from "chai";
import changeLevel from "../data/changeLevel.js";
import { INITIAL_STATE } from "../data/data.js";
import { GAME_SETTINGS } from "../data/data.js";

describe(`Changing the level`, () => {
  it(`should change the level when the player answered the question`, () => {
    expect(changeLevel(INITIAL_STATE, 0, GAME_SETTINGS.MAX_LEVEL).question).to.equal(1);
    expect(changeLevel(INITIAL_STATE, 1, GAME_SETTINGS.MAX_LEVEL).question).to.equal(2);
    expect(changeLevel(INITIAL_STATE, 2, GAME_SETTINGS.MAX_LEVEL).question).to.equal(3);
  });
  it(`should not allow the level to be more than 10`, () => {
    expect(changeLevel(INITIAL_STATE, 11, GAME_SETTINGS.MAX_LEVEL).question).to.equal(10);
    expect(changeLevel(INITIAL_STATE, 12, GAME_SETTINGS.MAX_LEVEL).question).to.equal(10);
  });
  it(`should not allow to set non number value`, () => {
    expect(() => changeLevel(INITIAL_STATE, [], GAME_SETTINGS.MAX_LEVEL)).throw(Error);
    expect(() => changeLevel(INITIAL_STATE, {}, GAME_SETTINGS.MAX_LEVEL)).throw(Error);
  });
});