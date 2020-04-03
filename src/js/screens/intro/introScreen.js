import IntroView from './introView.js';
import Application from '../../../application.js';

export default class IntroScreen {
  constructor() {
    this.content = new IntroView();
    this.element = this.content.element;
  }

  changeScreen() {
    this.content.onAsteriskButtonClick = () => Application.showGreeting();
  }
}