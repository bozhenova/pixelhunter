import { expect } from "chai";
import countScore from "../utils/countScore";
import { GAME_SETTINGS } from "../data/data";

describe(`Counting user's score`, () => {
  it(`should return 0 if the number of correct answers is less than 10`, () => {
    expect(countScore(new Array(9), 3, GAME_SETTINGS)).to.equal(0);
    expect(countScore(new Array(0), 1, GAME_SETTINGS)).to.equal(0);
  });
  it(`should return 1150 points if the player answered 10 questions in the
    normal amount of time`, () => {
    const playerAnswers = [
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
      {
        result: true,
        time: 15,
        type: 'correct'
      },
    ];
    expect(countScore(playerAnswers, 3, GAME_SETTINGS)).to.equal(1150);
  });
  it(`should return fewer than 1150 points if the player answered 10 questions
    slowly and have one or two lives`, () => {
    const playerAnswers = [
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
      {
        result: true,
        time: 9,
        type: 'slow'
      },
    ];
    expect(countScore(playerAnswers, 3, GAME_SETTINGS)).to.equal(650);
    expect(countScore(playerAnswers, 2, GAME_SETTINGS)).to.equal(600);
    expect(countScore(playerAnswers, 1, GAME_SETTINGS)).to.equal(550);
  });
  it(`should return more than 1150 points if the player answered 10 questions
    quickly`, () => {
    const playerAnswers = [
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
      {
        result: true,
        time: 23,
        type: 'fast'
      },
    ];
    expect(countScore(playerAnswers, 3, GAME_SETTINGS)).to.equal(1650);
    expect(countScore(playerAnswers, 2, GAME_SETTINGS)).to.equal(1600);
    expect(countScore(playerAnswers, 1, GAME_SETTINGS)).to.equal(1550);
  });
});
