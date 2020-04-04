import AbstractView from '../../../abstractView.js';
import { GAME_ANSWERS_FRAMES } from '../../data/data.js';
import resize from '../../utils/resize.js';


export default class GameView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    const indexStep = 1;
    const questionOneTemplate = () => {
      const questionTemplate = (data, index) => `<div class="game__option">
        <img src=${data.answers.image.url} alt="Option ${index + indexStep}"
        width=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.answers.image.width).width}
        height=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.answers.image.height).height}>
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question${index + indexStep}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question${index + indexStep}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`;

      return `<form class="game__content">
        ${this.data.map(questionTemplate).join(``)}
      </form>`;
    };


    const questionTwoTemplate = () => {

      return `<form class="game__content  game__content--wide">
        <div class="game__option">
          <img src=${this.data.answers.image.url} alt="Option 1"
          width=${resize(GAME_ANSWERS_FRAMES[this.data.type], this.data.answers.image.width).width}
          height=${resize(GAME_ANSWERS_FRAMES[this.data.type], this.data.answers.image.height).height}>
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="visually-hidden" name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>`;
    };

    const questionThreeTemplate = () => {
      const questionTemplate = (data, index) => `<div class="game__option">
        <img src=${data.answers.image.url} alt="Option ${index + indexStep}"
        width=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.answers.image.width).width}
        height=${resize(GAME_ANSWERS_FRAMES[this.data.type], data.answers.image.height).height}>
      </div>`;

      return `<form class="game__content  game__content--triple">
        ${this.data.map(questionTemplate).join(``)}
      </form>`;
    };

    let currentQuestion = null;

    switch (this.data.type) {
      case `two-of-two`:
        currentQuestion = questionOneTemplate(this.data);
        break;
      case `tinder-like`:
        currentQuestion = questionTwoTemplate();
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

  onAnswer() { }

  bind() {
    switch (this.data.type) {
      case `two-of-two`:
        const gameOneAnswers = this._element.querySelectorAll(`input`);

        for (const answer of gameOneAnswers) {
          answer.addEventListener(`change`, () => {
            const checkedInputs = this._element.querySelectorAll(`input:checked`);
            const answersNumber = 2;
            if (checkedInputs.length === answersNumber) {
              this.onAnswer();
            }
          });
        }
        break;

      case `tinder-like`:
        const inputs = this._element.querySelectorAll(`input`);

        for (const input of inputs) {
          input.addEventListener(`click`, (e) => {
            this.onAnswer(e);
          });
        }
        break;

      case `one-of-three`:
        const gameOptions = this._element.querySelectorAll(`.game__option`);

        for (const option of gameOptions) {
          option.addEventListener(`click`, (e) => {
            this.onAnswer(e);
          });
        }
        break;
    }
  }
}
