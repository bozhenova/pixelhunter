import AbstractView from "../../../abstractView";
import { INITIAL_STATE, State } from "../../data/data";


export default class HeaderView extends AbstractView {

	constructor(public state?: State) {
		super();
	}

	get template() {
		const stateTemplate = (state: State) => `<div class="game__timer">${
			state ? state.time : ``
			}</div>
    <div class="game__lives">
		${state ? new Array(INITIAL_STATE.lives - state.lives)
				.fill(`<img src="img/heart__empty.svg"class="game__heart" alt=" Missed Life" width="31" height="27">`)
				.join(``) : ``}
      ${state ? new Array(state.lives).fill(`<img src="img/heart__full.svg"
      class="game__heart" alt="Life" width="31" height="27">`).join(``) : ``
			}
    </div>`;

		return `<header class="header">
      <button class="back">
			<span class="visually-hidden">Вернуться к началу</span>
			<img src="img/sprite/arrow-left.svg">
			<img src="img/sprite/logo-small.svg">
		</button>
   ${this.state ? stateTemplate(this.state) : ``}
    </header>`;
	}

	onBackButtonClick() { }

	bind() {
		const backButton = this.element.querySelector(`.back`);

		backButton.addEventListener(`click`, (e) => {
			e.preventDefault();
			this.onBackButtonClick();
		});
	}
}
