import LoaderView from "./loaderView";

export default class LoaderScreen {
  constructor() {
    this.content = new LoaderView();
    this.element = this.content.element;
  }
}
