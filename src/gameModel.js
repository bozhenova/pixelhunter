import Answer from './data/answer.js';
import { INITIAL_STATE, GAME_SETTINGS, LEVELS } from './js/data/data.js';
import changeLevel from './js/utils/changeLevel.js';
import countScore from './js/utils/countScore.js';
import setTimer from './js/utils/setTimer.js';
import countLives from './js/utils/countLives.js';

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }
  get state() {
    return Object.freeze(this._state);
  }

  get finalScore() {
    return countScore(this._state.answers, this._state.lives, GAME_SETTINGS);
  }

  isLastLevel() {
    return changeLevel(this._state, this._state.level, GAME_SETTINGS.maxLevel).level === GAME_SETTINGS.maxLevel;
  }

  getNextLevel() {
    this._state = changeLevel(this._state, this._state.level, GAME_SETTINGS.maxLevel);
  }

  restart() {
    const answers = [];
    this._state = Object.assign({}, INITIAL_STATE, { answers });
  }

  loseLife() {
    this._state = countLives(this._state, GAME_SETTINGS);
  }

  isGameOver() {
    return this._state.lives <= GAME_SETTINGS.dead;
  }

  tick() {
    this._state = setTimer(this._state, GAME_SETTINGS);
  }

  resetTimer() {
    const time = INITIAL_STATE.time;
    this._state = Object.assign({}, this._state, { time });
  }

  updateScore(condition) {
    const answer = (condition) ? new Answer(true, this._state.time) : new Answer(false, this._state.time);
    answer.countSpeedType();
    this._state.answers.push(answer);
  }

  getCurrentLevel() {
    return LEVELS[this._state.level];
  }
}