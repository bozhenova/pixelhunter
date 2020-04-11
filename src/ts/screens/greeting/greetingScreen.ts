import GreetingView from './greetingView';
import Application from '../../../application';

export default class GreetingScreen {
	constructor() {
		this.content = new GreetingView();
		this.element = this.content.element;
	}

	changeScreen() {
		this.content.onContinueButtonClick = () => Application.showRules();
	}
}
