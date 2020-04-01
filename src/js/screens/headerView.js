import showScreen from "./showScreen";
import AbstractView from "./abstractView.js";
import GreetingView from "./greetingView.js";
import ModalView from "./modalView.js";

class HeaderView extends AbstractView {
	constructor(gameState) {
		super();
		this.gameState = gameState;
	}

	get template() {
		const INITIAL_LIVES_NUMBER = 3;

		return `<header class="header">
		<button class="back">
			<span class="visually-hidden">Вернуться к началу</span>
			<img src="img/sprite/arrow-left.svg">
			<img src="img/sprite/logo-small.svg">
		</button>
		<div class="game__timer">${this.gameState[`time`]}</div>
		<div class="game__lives">
		${new Array(INITIAL_LIVES_NUMBER - this.gameState[`lives`])
				.fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Missed Life" width="31" height="27"></img>`)
				.join(` `)}
		${new Array(this.gameState[`lives`])
				.fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27"></img>`)
				.join(` `)}
		</div>
		</header>`;
	}

	onClick() { }

	bind() {
		const backButton = this._element.querySelector(`.back`);

		const backButtonClickHandler = (e) => {
			e.preventDefault();
			e.stopPropagation();

			this.onClick();
		};

		backButton.addEventListener(`click`, backButtonClickHandler);
	}

}


export default HeaderView;