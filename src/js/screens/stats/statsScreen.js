import StatsView from './statsView.js';
import HeaderView from '../header/header.js';
import Application from '../../../application.js';

export default class StatsScreen {
	constructor(data) {
		this.data = data.reverse();
		this.header = new HeaderView();
		this.content = new StatsView(data);
		this.element = document.createElement(`div`);
		this.element.append(this.header.element);
		this.element.append(this.content.element);
	}

	changeScreen() {
		this.header.onBackButtonClick = () => Application.showGreeting();
	}
}
