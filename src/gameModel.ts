import Answer from './ts/data/answer';
import { INITIAL_STATE, GAME_SETTINGS, State, GameData } from './ts/data/data';
import changeLevel from './ts/utils/changeLevel';
import countScore from './ts/utils/countScore';
import setTimer from './ts/utils/setTimer';
import countLives from './ts/utils/countLives';

export type Data = { level: number, lives: number, result: number, answers: string[] };

export class GameModel {
  protected _state: State;

  constructor(protected _gameData: GameData[], public playerName: string) {
    this.restart();
  }
  get state(): State {
    return this._state;
  }

  get finalScore() {
    return countScore(this.state.answers, this.state.lives, GAME_SETTINGS);
  }

  isLastLevel(): boolean {
    return changeLevel(this.state, this.state.level, GAME_SETTINGS.maxLevel).level === GAME_SETTINGS.maxLevel;
  }

  getNextLevel(): void {
    this._state = changeLevel(this.state, this.state.level, GAME_SETTINGS.maxLevel);
  }

  restart(): void {
    const answers: object[] = [];
    this._state = Object.assign({}, INITIAL_STATE, { answers });
  }

  loseLife(): void {
    this._state = countLives(this.state, GAME_SETTINGS);
  }

  isDead(): boolean {
    return this.state.lives <= GAME_SETTINGS.dead;
  }

  tick(): void {
    this._state = setTimer(this.state, GAME_SETTINGS);
  }

  resetTimer(): void {
    const time: number = INITIAL_STATE.time;
    this._state = Object.assign({}, this.state, { time });
  }

  updateScore(condition: boolean): void {
    const answer: any = condition ? new Answer(true, this.state.time) : new Answer(false, this.state.time);
    answer.countSpeedType();
    this.state.answers.push(answer);
  }

  getCurrentLevel() {
    return this._gameData[this.state.level];
  }
}