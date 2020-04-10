import { GAME_SETTINGS } from './data';

export default class Answer {
  constructor(result, time) {
    this.result = result;
    this.type = this.result ? `correct` : `wrong`;
    this.time = time;
  }

  countSpeedType() {
    if (this.result && this.time > GAME_SETTINGS.maxTime) {
      this.type = `fast`;
    }
    if (this.result && this.time < GAME_SETTINGS.minTime) {
      this.type = `slow`;
    }
  }
}