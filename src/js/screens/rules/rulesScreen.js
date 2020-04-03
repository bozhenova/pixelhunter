import RulesView from './rulesView.js';
import HeaderView from '../header/header.js';
import Application from '../../../application.js';

export default class RulesScreen {
	constructor() {
		this.header = new HeaderView();
		this.content = new RulesView();
		this.element = document.createElement(`div`);
		this.element.append(this.header.element);
		this.element.append(this.content.element);
	}

	get playerName() {
		return this.element.querySelector(`.rules__input`).value;
	}

	goPreviosScreen() {
		this.header.onBackButtonClick = () => Application.showGreeting();
	}

	goNextScreen() {
		this.content.onGoButtonClick = () => Application.showGame(this.playerName);
	}

	changeScreen() {
		this.goPreviosScreen();
		this.goNextScreen();
	}
}

