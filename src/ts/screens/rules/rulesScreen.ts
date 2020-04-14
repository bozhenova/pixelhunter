import RulesView from "./rulesView";
import HeaderView from "../header/header";
import Application from "../../application";
import { State } from "../../data/data";

export default class RulesScreen {
  state: State;
  element: HTMLElement;
  content: RulesView;
  header: HeaderView;


  constructor() {
    this.header = new HeaderView(this.state);
    this.content = new RulesView();
    this.element = document.createElement(`div`);
    this.element.append(this.header.element);
    this.element.append(this.content.element);
  }

  get playerName() {
    const input = this.element.querySelector(`.rules__input`) as HTMLInputElement;
    return input.value;
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
