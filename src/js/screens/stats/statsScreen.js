import StatsView from './statsView.js';
import HeaderView from '../header/header.js';
import Application from '../../../application.js';

export default class StatsScreen {
	constructor(model) {
		this.model = model;
		this.header = new HeaderView();
		this.content = new StatsView(this.model.state, this.model.finalScore);
		this.element = document.createElement(`div`);
		this.element.append(this.header.element);
		this.element.append(this.content.element);
	}

	changeScreen() {
		this.header.onBackButtonClick = () => Application.showGreeting();
	}
}
