import { expect } from "chai";
import setTimer from "../data/setTimer.js";
import { INITIAL_STATE } from "../data/data.js";

describe(`Set game timer`, () => {
  it(`should reduce time by 1 second`, () => {
    const testGame = {
      time: 29
    };
    expect(setTimer(INITIAL_STATE).time).to.equal(29);
    expect(setTimer(testGame).time).to.equal(28);
  });

  it(`should stop the timer if there is no time left`, () => {
    const testGame = {
      time: 0
    };
    expect(setTimer(testGame).time).to.equal(0);
  });

  it(`should not allow the timer to have a negative value`, () => {
    const testGame = {
      time: -1
    };

    expect(setTimer(testGame).time).to.equal(0);
  });
});