import StatsView from "./statsView";
import HeaderView from "../header/header";
import Application from "../../../application";
import { Data } from '../../../gameModel';

export default class StatsScreen {
  element: HTMLDivElement
  header: HeaderView;
  content: StatsView;


  constructor(public data: Data[]) {
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
