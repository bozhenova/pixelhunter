import ModalView from './modalView.js';
import Application from '../../../application.js';

export default class ModalScreen {
  constructor() {
    this.content = new ModalView();
    this.element = this.content.element;
  }

  confirm() {
    this.content.onConfirm = () => Application.showGreeting();
  }

  cancel() {
    this.content.onCancel = () => Application.closeModal();
  }

  changeScreen() {
    this.confirm();
    this.cancel();
  }
}