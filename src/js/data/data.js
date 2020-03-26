const INITIAL_GAME = Object.freeze({
  question: 0,
  lives: 3,
  time: 30,
  answers: [
    {
      result: true,
      type: `correct`,
      time: 15
    },
    {
      result: false,
      type: `wrong`,
      time: 15
    },
    {
      result: true,
      type: `fast`,
      time: 9
    },
    {
      result: true,
      type: `slow`,
      time: 21
    },
  ],
});

const LEVELS = [
  {
    type: `game-1`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: ``,
        type: `paint`
      },
      {
        img: ``,
        type: `paint`
      }
    ]
  },
  {
    type: `game-2`,
    question: `Угадай, фото или рисунок?`,
    answer: {
      img: ``,
      type: `paint`
    }
  },
  {
    type: `game-3`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: ``,
        type: `paint`
      },
      {
        img: ``,
        type: `photo`
      },
      {
        img: ``,
        type: `photo`
      }
    ]
  },
  {
    type: `game-1`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: ``,
        type: `paint`
      },
      {
        img: ``,
        type: `photo`
      }
    ]
  },
  {
    type: `game-2`,
    question: `Угадай, фото или рисунок?`,
    answer: {
      img: ``,
      type: `photo`
    }
  },
  {
    type: `game-3`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: ``,
        type: `photo`
      },
      {
        img: ``,
        type: `paint`
      },
      {
        img: ``,
        type: `photo`
      }
    ]
  },
  {
    type: `game-1`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: ``,
        type: `photo`
      },
      {
        img: ``,
        type: `paint`
      }
    ]
  },
  {
    type: `game-2`,
    question: `Угадай, фото или рисунок?`,
    answer: {
      img: ``,
      type: `photo`
    }
  },
  {
    type: `game-3`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: ``,
        type: `photo`
      },
      {
        img: ``,
        type: `photo`
      },
      {
        img: ``,
        type: `paint`
      }
    ]
  },
  {
    type: `game-1`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        img: ``,
        type: `photo`
      },
      {
        img: ``,
        type: `photo`
      }
    ]
  }
];

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

const answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];

export { INITIAL_GAME, LEVELS, GAME_SETTINGS, QUESTIONS };