import ErrorView from './errorView.js';

export default class ErrorScreen {
  constructor() {
    this.content = new ErrorView();
    this.element = this.content.element;
  }

}