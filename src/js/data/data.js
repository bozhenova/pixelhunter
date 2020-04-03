const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 30,
  answers: Object.freeze([])
});

const LEVELS = [
  {
    type: `game-1`,
    question: `Угадайте для каждого изображения: фото или рисунок?`,
    answers: [
      {
        img: `https://k42.kn3.net/CF42609C8.jpg`,
        width: 600,
        height: 831,
        type: `paint`
      },
      {
        img: `https://k42.kn3.net/D2F0370D6.jpg`,
        width: 468,
        height: 354,
        type: `paint`
      }
    ]
  },
  {
    type: `game-2`,
    question: `Угадайте, фото или рисунок?`,
    answer: {
      img: `https://k32.kn3.net/5C7060EC5.jpg`,
      width: 1200,
      height: 800,
      type: `paint`
    }
  },
  {
    type: `game-3`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: `https://k32.kn3.net/5C7060EC5.jpg`,
        width: 1200,
        height: 900,
        type: `paint`
      },
      {
        img: `http://i.imgur.com/1KegWPz.jpg`,
        width: 1080,
        height: 720,
        type: `photo`
      },
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        width: 1264,
        height: 1864,
        type: `photo`
      }
    ]
  },
  {
    type: `game-1`,
    question: `Угадайте для каждого изображения: фото или рисунок?`,
    answers: [
      {
        img: `https://k42.kn3.net/CF42609C8.jpg`,
        width: 600,
        height: 831,
        type: `paint`
      },
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        width: 1120,
        height: 2965,
        type: `photo`
      }
    ]
  },
  {
    type: `game-2`,
    question: `Угадайте, фото или рисунок?`,
    answer: {
      img: `http://i.imgur.com/1KegWPz.jpg`,
      width: 1080,
      height: 720,
      type: `photo`
    }
  },
  {
    type: `game-3`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        width: 1264,
        height: 1864,
        type: `photo`
      },
      {
        img: `https://k42.kn3.net/D2F0370D6.jpg`,
        width: 468,
        height: 354,
        type: `paint`
      },
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        width: 1120,
        height: 2965,
        type: `photo`
      }
    ]
  },
  {
    type: `game-1`,
    question: `Угадайте для каждого изображения: фото или рисунок?`,
    answers: [
      {
        img: `http://i.imgur.com/1KegWPz.jpg`,
        width: 1080,
        height: 720,
        type: `photo`
      },
      {
        img: `https://k32.kn3.net/5C7060EC5.jpg`,
        width: 1200,
        height: 900,
        type: `paint`
      }
    ]
  },
  {
    type: `game-2`,
    question: `Угадайте, фото или рисунок?`,
    answer: {
      img: `https://i.imgur.com/DiHM5Zb.jpg`,
      width: 1264,
      height: 1864,
      type: `photo`
    }
  },
  {
    type: `game-3`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        width: 1120,
        height: 2965,
        type: `photo`
      },
      {
        img: `http://i.imgur.com/1KegWPz.jpg`,
        width: 1080,
        height: 720,
        type: `photo`
      },
      {
        img: `https://k42.kn3.net/D2F0370D6.jpg`,
        width: 468,
        height: 354,
        type: `paint`
      }
    ]
  },
  {
    type: `game-1`,
    question: `Угадайте для каждого изображения: фото или рисунок?`,
    answers: [
      {
        img: `https://i.imgur.com/DiHM5Zb.jpg`,
        width: 1264,
        height: 1864,
        type: `photo`
      },
      {
        img: `http://i.imgur.com/DKR1HtB.jpg`,
        width: 1120,
        height: 2965,
        type: `photo`
      }
    ]
  }
];

const GAME_SETTINGS = {
  savedLifeBonus: 50,
  correctAnswerBonus: 100,
  fastAnswerBonus: 50,
  slowAnswerFair: 50,
  maxLevel: 10,
  interval: 1000,
  dead: -1,
  fail: -1,
  endTime: 0,
  minTime: 10,
  maxTime: 20,
};

const GAME_ANSWERS_FRAMES = {
  'game-1': {
    width: 468,
    height: 458
  },
  'game-2': {
    width: 705,
    height: 455
  },
  'game-3': {
    width: 304,
    height: 455
  }
};


export { INITIAL_STATE, GAME_SETTINGS, GAME_ANSWERS_FRAMES, LEVELS };