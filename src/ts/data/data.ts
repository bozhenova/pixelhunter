type State = { level: number, lives: number, time: number, answers: string[] };

const INITIAL_STATE: State = {
  level: 0,
  lives: 3,
  time: 30,
  answers: []
};

const LEVELS: object[] = [
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения: фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          width: 600,
          height: 831,
        },
        type: `painting`
      },
      {
        image: {
          url: `https://k42.kn3.net/D2F0370D6.jpg`,
          width: 468,
          height: 354,
        },
        type: `painting`
      }
    ]
  },
  {
    type: `tinder-like`,
    question: `Угадайте, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://k32.kn3.net/5C7060EC5.jpg`,
          width: 1200,
          height: 800,
        },
        type: `painting`
      }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `https://k32.kn3.net/5C7060EC5.jpg`,
          width: 1200,
          height: 900,
        },
        type: `painting`
      },
      {
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`,
          width: 1080,
          height: 720,
        },
        type: `photo`
      },
      {
        image: {
          url: `https://i.imgur.com/DiHM5Zb.jpg`,
          width: 1264,
          height: 1864,
        },
        type: `photo`
      }
    ]
  },
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения: фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          width: 600,
          height: 831,
        },
        type: `painting`
      },
      {
        image: {
          url: `http://i.imgur.com/DKR1HtB.jpg`,
          width: 1120,
          height: 2965,
        },
        type: `photo`
      }
    ]
  },
  {
    type: `tinder-like`,
    question: `Угадайте, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`,
          width: 1080,
          height: 720,
        },
        type: `photo`
      }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/DiHM5Zb.jpg`,
          width: 1264,
          height: 1864,
        },
        type: `photo`
      },
      {
        image: {
          url: `https://k42.kn3.net/D2F0370D6.jpg`,
          width: 468,
          height: 354,
        },
        type: `painting`
      },
      {
        image: {
          url: `http://i.imgur.com/DKR1HtB.jpg`,
          width: 1120,
          height: 2965,
        },
        type: `photo`
      }
    ]
  },
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения: фото или рисунок?`,
    answers: [
      {
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`,
          width: 1080,
          height: 720,
        },
        type: `photo`
      },
      {
        image: {
          url: `https://k32.kn3.net/5C7060EC5.jpg`,
          width: 1200,
          height: 900,
        },
        type: `painting`
      }
    ]
  },
  {
    type: `tinder-like`,
    question: `Угадайте, фото или рисунок?`,
    answers: [{
      image: {
        url: `https://i.imgur.com/DiHM5Zb.jpg`,
        width: 1264,
        height: 1864,
      },
      type: `photo`
    }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `http://i.imgur.com/DKR1HtB.jpg`,
          width: 1120,
          height: 2965,
        },
        type: `photo`
      },
      {
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`,
          width: 1080,
          height: 720,
        },
        type: `photo`
      },
      {
        image: {
          url: `https://k42.kn3.net/D2F0370D6.jpg`,
          width: 468,
          height: 354,
        },
        type: `painting`
      }
    ]
  },
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения: фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/DiHM5Zb.jpg`,
          width: 1264,
          height: 1864,
        },
        type: `photo`
      },
      {
        image: {
          url: `http://i.imgur.com/DKR1HtB.jpg`,
          width: 1120,
          height: 2965,
        },
        type: `photo`
      }
    ]
  }
];

type Settings = { savedLifeBonus: number, correctAnswerBonus: number, fastAnswerBonus: number, slowAnswerFine: number, maxLevel: number, interval: number, dead: number, fail: number, endTime: number, minTime: number, maxTime: number, indexStep: number };

const GAME_SETTINGS: Settings = {
  savedLifeBonus: 50,
  correctAnswerBonus: 100,
  fastAnswerBonus: 50,
  slowAnswerFine: 50,
  maxLevel: 10,
  interval: 1000,
  dead: -1,
  fail: 0,
  endTime: 0,
  minTime: 10,
  maxTime: 20,
  indexStep: 1
};

const DEBUG: object = {
  state: false,
  firstStyleType: `style= "border: 5px solid rgba(0, 255, 0, 0.7)"`,
  secondStyleType: `style="border-color:rgba(0, 255, 0, 0.7)"`
};

type Frames = {
  'two-of-two': {
    width: number,
    height: number
  },
  'tinder-like': {
    width: number,
    height: number
  },
  'one-of-three': {
    width: number,
    height: number
  }
};

const GAME_ANSWERS_FRAMES: Frames = {
  'two-of-two': {
    width: 468,
    height: 458
  },
  'tinder-like': {
    width: 705,
    height: 455
  },
  'one-of-three': {
    width: 304,
    height: 455
  }
};


export { INITIAL_STATE, GAME_SETTINGS, GAME_ANSWERS_FRAMES, LEVELS, DEBUG };