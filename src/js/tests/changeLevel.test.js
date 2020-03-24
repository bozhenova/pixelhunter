import { expect } from 'chai';
import changeLevel from '../data/changeLevel.js';
import { INITIAL_GAME } from '../data/data.js';
import { GAME_SETTINGS } from '../data/settings.js';

describe(`Changing the level`, () => {
  it(`should change the level when the player answered the question`, () => {
    expect(changeLevel(INITIAL_GAME, 0, GAME_SETTINGS.maxLevel).level).to.equal(1);
    expect(changeLevel(INITIAL_GAME, 1, GAME_SETTINGS.maxLevel).level).to.equal(2);
    expect(changeLevel(INITIAL_GAME, 2, GAME_SETTINGS.maxLevel).level).to.equal(3);
  });
  it(`should not allow the level to be more than 10`, () => {
    expect(changeLevel(INITIAL_GAME, 11, GAME_SETTINGS.maxLevel).level).to.equal(10);
    expect(changeLevel(INITIAL_GAME, 12, GAME_SETTINGS.maxLevel).level).to.equal(10);
  });
  it(`should not allow to set non number value`, () => {
    expect(() => changeLevel(INITIAL_GAME, [], GAME_SETTINGS.maxLevel)).throw(Error);
    expect(() => changeLevel(INITIAL_GAME, {}, GAME_SETTINGS.maxLevel)).throw(Error);
  });
});