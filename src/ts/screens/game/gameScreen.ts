import HeaderView from '../header/header';
import GameView from './gameView';
import StatsBarView from '../stats/statsBarView';
import Application from '../../application';
import { GAME_SETTINGS, GameData, State } from '../../data/data';
import { GameModel } from '../../gameModel';

export default class GameScreen {
  header: HeaderView;
  content: GameView;
  root: HTMLElement;
  state: State;
  timer: any;

  constructor(public model: GameModel) {
    this.header = new HeaderView(this.model.state);
    this.content = new GameView(this.model.getCurrentLevel());
    this.root = document.createElement(`div`);
    this.root.append(this.header.element);
    this.root.append(this.content.element);
    this.content.element.append(new StatsBarView(this.model.state).element);
    this.timer = null;
  }

  startGame() {
    this.content.onAnswer = (e: MouseEvent) => {
      this.answer(this.model.getCurrentLevel(), e);
      this.changeLevel();
    };
    this.tick();
  }

  private tick() {
    this.updateHeader();
    this.model.tick();
    this.timer = setTimeout(() => {
      this.tick();
      this.abortLevel();
    }, GAME_SETTINGS.interval);
  }

  private abortLevel() {
    if (this.model.state.time === GAME_SETTINGS.endTime) {
      this.model.updateScore(false);
      this.model.loseLife();
      this.stopTimer();
      this.endGame();
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.model.resetTimer();
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    header.onBackButtonClick = () => Application.showModal();
    this.header = header;
  }

  changeContentView(view: GameView) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  changeLevel() {
    this.updateHeader();
    this.model.getNextLevel();
    this.tick();

    const content = new GameView(this.model.getCurrentLevel());
    this.changeContentView(content);
    this.content.element.append(new StatsBarView(this.model.state).element);
    this.content.onAnswer = (e: MouseEvent) => {
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

  answer(level: GameData, e: Event) {

    let answerType: boolean;

    switch (level.type) {
      case `two-of-two`:
        const [firstInput, secondInput] = this.content.element.querySelectorAll(`input:checked`) as NodeListOf<HTMLInputElement>;
        const [firstAnswer, secondAnswer] = level.answers;

        answerType = firstInput.value === firstAnswer.type &&
          secondInput.value === secondAnswer.type;
        break;
      case `tinder-like`:
        let index: number = 0;
        const inputElement = e.target as HTMLInputElement;
        answerType = inputElement.value === level.answers[index].type;
        break;
      case `one-of-three`:
        const gameOptions = this.content.element.querySelector(`.game__content`);
        const uniqueElementLength: number = 1;
        const element = e.target as HTMLElement;
        const answerIndex = [...gameOptions.children].indexOf(element.closest(`.game__option`));

        answerType = level.answers.filter((value: GameData["answers"][0]) => value.type === level.answers[answerIndex].type).length === uniqueElementLength;
        break;
    }


    if (!answerType) {
      this.model.loseLife();
    }
    this.model.updateScore(answerType);
    this.stopTimer();
  }

}