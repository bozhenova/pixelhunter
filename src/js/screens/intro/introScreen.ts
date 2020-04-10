import IntroView from "./introView";
import Application from "../../../application";

export default class IntroScreen {
  constructor() {
    this.content = new IntroView();
    this.element = this.content.element;
  }

  changeScreen() {
    this.content.onAsteriskButtonClick = () => Application.showGreeting();
  }
}
