import ErrorView from './errorView';

export default class ErrorScreen {
  content: object
  element: HTMLElement

  constructor(public error: object) {
    this.content = new ErrorView(error);
    this.element = this.content.element;
  }

}