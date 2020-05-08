import Answer from './data/answer';
import { INITIAL_STATE, GAME_SETTINGS, State, GameData } from './data/data';
import changeLevel from './utils/changeLevel';
import countScore from './utils/countScore';
import setTimer from './utils/setTimer';
import loseLife from './utils/loseLife';


export class GameModel {
  private _state: State;

  constructor(public gameData: GameData[], public playerName: string) {
    this.restart();
  }

  get state(): State {
    return this._state;
  }

  get finalScore() {
    return countScore(this.state.answers, this.state.lives, GAME_SETTINGS);
  }

  isLastLevel(): boolean {
    return this.state.level === GAME_SETTINGS.maxLevel;
  }

  getNextLevel(): void {
    this._state = changeLevel(this.state);
  }

  restart(): void {
    this._state = { ...INITIAL_STATE };
  }

  loseLife(): void {
    this._state = loseLife(this.state);
  }

  isDead(): boolean {
    return this.state.lives <= GAME_SETTINGS.dead;
  }

  tick(): void {
    this._state = setTimer(this.state, GAME_SETTINGS);
  }

  resetTimer(): void {
    this._state = { ...this.state, time: INITIAL_STATE.time };
  }

  updateScore(condition: boolean): void {
    const answer: Answer = condition ? new Answer(true, this.state.time) : new Answer(false, this.state.time);
    answer.countSpeedType();
    this.state.answers.push(answer);
  }

  getCurrentLevel() {
    return this.gameData[this.state.level - 1];
  }
}