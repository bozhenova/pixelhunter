const INITIAL_STATE = Object.freeze({
  question: 1,
  lives: 3,
  time: 30,
});

const QUESTIONS = [
  { imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`], rightAnswers: [0, 1] },
  { imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`], rightAnswers: [0] },
  { imageSources: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`], rightAnswers: [2] },
  { imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`], rightAnswers: [0, 1] },
  { imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`], rightAnswers: [0] },
  { imageSources: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`], rightAnswers: [2] },
  { imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`], rightAnswers: [0, 1] },
  { imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`], rightAnswers: [0] },
  { imageSources: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`], rightAnswers: [2] },
  { imageSources: [`https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`], rightAnswers: [0, 1] }
];

const GAME_SETTINGS = {
  SAVED_LIVE_BONUS: 50,
  CORRECT_ANSWER_BONUS: 100,
  FAST_ANSWER_BONUS: 50,
  SLOW_ANSWER_FAIR: 50,
  MAX_LEVEL: 10,
  SECOND: 1000,
  DEAD: -1,
  FAIL: -1,
  END_TIME: 0
};

let answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];

export { INITIAL_STATE, GAME_SETTINGS, QUESTIONS, answers };