import AbstractView from '../../../abstractView';
import { GAME_ANSWERS_FRAMES, GAME_SETTINGS, DEBUG, GameData } from '../../data/data';
import resize from '../../utils/resize';

export default class GameView extends AbstractView {
  constructor(public data: GameData) {
    super();
  }

  get template() {
    const questionOneTemplate = (data: any) => {
      const questionTemplate = (data: any, index: number) => `<div class="game__option">
        <img src=${data.image.url} alt="Option ${index + GAME_SETTINGS.indexStep}"
        width=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.image).width}
        height=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.image).height}>
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question${index + GAME_SETTINGS.indexStep}" type="radio" value="photo"><span ${DEBUG.state && data.type === `photo` ? DEBUG.firstStyleType : ``}>
            Фото</span>
        </label>
        <label class="game__answer game__answer--painting">
          <input class="visually-hidden" name="question${index + GAME_SETTINGS.indexStep}" type="radio" value="painting"><span ${DEBUG.state && data.type === `painting` ? DEBUG.firstStyleType : ``}>
            Рисунок</span>
        </label>
      </div>`;

      return `<form class="game__content">
        ${data.answers.map(questionTemplate).join(``)}
      </form>`;
    };


    const questionTwoTemplate = (data: GameData) => {
      let index: number = 0;

      return `<form class="game__content  game__content--wide">
        <div class="game__option">
          <img src=${this.data.answers[index].image.url} alt="Option 1"
          width=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.answers[index].image).width}
          height=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.answers[index].image).height}>
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question1" type="radio" value="photo"> <span ${DEBUG.state && data.type === `photo` ? DEBUG.firstStyleType : ``}>
              Фото</span>
          </label>
          <label class="game__answer  game__answer--painting">
            <input class="visually-hidden" name="question1" type="radio" value="painting"><span ${DEBUG.state && data.type === `painting` ? DEBUG.firstStyleType : ``}>
              Рисунок</span>
          </label>
        </div>
      </form>`;
    };

    const questionThreeTemplate = (data: GameData) => {
      const uniqueElementLength: number = 1;
      const questionTemplate = (data: any, index: number) => `<div class="game__option">
      ${DEBUG.state && this.data.answers.filter((value: any) => value.type === data.type).length === uniqueElementLength ? DEBUG.secondStyleType : ``}>
        <img src=${data.image.url} alt="Option ${index + GAME_SETTINGS.indexStep}"
        width=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.image).width}
        height=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.image).height}>
      </div>`;

      return `<form class="game__content  game__content--triple">
        ${data.answers.map(questionTemplate).join(``)}
      </form>`;
    };

    let currentQuestion = null;

    switch (this.data.type) {
      case `two-of-two`:
        currentQuestion = questionOneTemplate(this.data);
        break;
      case `tinder-like`:
        currentQuestion = questionTwoTemplate(this.data);
        break;
      case `one-of-three`:
        currentQuestion = questionThreeTemplate(this.data);
        break;
    }

    return `<section class="game">
      <p class="game__task">${this.data.question}</p>
      ${currentQuestion}
    </section>`;
  }

  onAnswer(e: any): void { }

  bind() {
    switch (this.data.type) {
      case `two-of-two`:
        const gameOneAnswers: NodeListOf<HTMLInputElement> = this.element.querySelectorAll(`input`);

        for (const answer of gameOneAnswers) {
          answer.addEventListener(`change`, (e) => {
            const checkedInputs = this.element.querySelectorAll(`input:checked`);
            const answersNumber = 2;
            if (checkedInputs.length === answersNumber) {
              this.onAnswer(e);
            }
          });
        }
        break;

      case `tinder-like`:
        const inputs: NodeListOf<HTMLInputElement> = this.element.querySelectorAll(`input`);

        for (const input of inputs) {
          input.addEventListener(`click`, (e: MouseEvent) => {
            this.onAnswer(e);
          });
        }
        break;

      case `one-of-three`:
        const gameOptions: NodeListOf<HTMLInputElement> = this.element.querySelectorAll(`.game__option`);

        for (const option of gameOptions) {
          option.addEventListener(`click`, (e: MouseEvent) => {
            this.onAnswer(e);
          });
        }
        break;
    }
  }
}
