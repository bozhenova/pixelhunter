type State = { level: number, lives: number, time: number, result?: number, answers: { result: boolean, time: number, type: string }[] };

const INITIAL_STATE: State = Object.freeze({
  level: 1,
  lives: 3,
  time: 30,
  answers: []
});

type GameData = { type: string, question: string, answers: { image: { url: string, width: number, height: number, size: { width: number, height: number } }, type: string }[] };


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

type Debug = { state: boolean, firstStyleType: string, secondStyleType: string };
const DEBUG: Debug = {
  state: false,
  firstStyleType: `style="border: 5px solid rgba(0, 255, 0, 0.7)"`,
  secondStyleType: `style="border-color: rgba(0, 255, 0, 0.7)"`
};
type Sizes = { width: number, height: number };


export { INITIAL_STATE, GAME_SETTINGS, DEBUG, State, Settings, GameData, Sizes };