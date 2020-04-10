import ErrorView from './errorView';

export default class ErrorScreen {
  constructor(error) {
    this.content = new ErrorView(error);
    this.element = this.content.element;
  }

}