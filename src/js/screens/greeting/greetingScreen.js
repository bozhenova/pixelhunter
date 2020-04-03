import GreetingView from './greetingView.js';
import Application from '../../../application.js';

export default class GreetingScreen {
	constructor() {
		this.content = new GreetingView();
		this.element = this.content.element;
	}

	changeScreen() {
		this.content.onContinueButtonClick = () => Application.showRules();
	}
}
