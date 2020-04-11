import { GAME_SETTINGS } from './data';

export default class Answer {
  type: string

  constructor(public result: boolean, public time: number) {
    this.type = this.result ? `correct` : `wrong`;
  }

  countSpeedType(): void {
    if (this.result && this.time > GAME_SETTINGS.maxTime) {
      this.type = `fast`;
    }
    if (this.result && this.time < GAME_SETTINGS.minTime) {
      this.type = `slow`;
    }
  }
}