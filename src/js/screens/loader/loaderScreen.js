import LoaderView from './loaderView.js';

export default class LoaderScreen {
  constructor() {
    this.content = new LoaderView();
    this.element = this.content.element;
  }

}