import HeaderView from '../header/header';
import GameView from './gameView';
import StatsBarView from '../stats/statsBarView';
import Application from '../../../application';
import { GAME_SETTINGS } from '../../data/data';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = new GameView(this.model.getCurrentLevel());
    this.root = document.createElement(`div`);
    this.root.append(this.header.element);
    this.root.append(this.content.element);
    this.content.element.append(new StatsBarView(this.model.state).element);
    this._timer = null;
  }

  startGame() {
    this.content.onAnswer = (e) => {
      this.answer(this.model.getCurrentLevel(), e);
      this.changeLevel();
    };
    this._tick();
  }

  _tick() {
    this.model.tick();
    this.updateHeader();
    this._timer = setTimeout(() => {
      this._tick();
      this._abortLevel();
    }, GAME_SETTINGS.interval);
  }

  _abortLevel() {
    if (this.model.state.time === GAME_SETTINGS.endTime) {
      this.model.updateScore(false);
      this.model.loseLife();
      this.stopGame();
      this.continueGame();
    }
  }

  stopGame() {
    clearInterval(this._timer);
    this.model.resetTimer();
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    header.onBackButtonClick = () => Application.showModal();
    this.header = header;
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  changeLevel() {
    this.updateHeader();
    this.model.getNextLevel();
    this._tick();

    const content = new GameView(this.model.getCurrentLevel());
    this.changeContentView(content);
    this.content.element.append(new StatsBarView(this.model.state).element);
    this.content.onAnswer = (e) => {
      this.answer(this.model.getCurrentLevel(), e);
      this.continueGame();
    };
  }

  continueGame() {
    return (this.model.isLastLevel() || this.model.isDead()) ? this.endGame() : this.changeLevel();
  }

  endGame() {
    Application.showStats(this.model);
  }

  answer(level, e) {

    let answerType = null;

    switch (level.type) {
      case `two-of-two`:
        const [firstInput, secondInput] = this.content.element.querySelectorAll(`input:checked`);
        const [firstAnswer, secondAnswer] = level.answers;

        answerType = firstInput.value === firstAnswer.type &&
          secondInput.value === secondAnswer.type;
        break;
      case `tinder-like`:
        let index = 0;
        answerType = e.target.value === level.answers[index].type;
        break;
      case `one-of-three`:
        const gameOptions = this.content.element.querySelector(`.game__content`);
        const answerIndex = [...gameOptions.children].indexOf(e.target.closest(`.game__option`));

        answerType = level.answers[answerIndex].type === `painting`;
        break;
    }

    if (!answerType) {
      this.model.loseLife();
    }
    this.model.updateScore(answerType);
    this.stopGame();
  }

}