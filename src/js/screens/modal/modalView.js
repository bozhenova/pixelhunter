import AbstractView from '../../../abstractView.js';

export default class ModalView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="modal">
        <form class="modal__inner">
          <button class="modal__close" type="button">
            <span class="visually-hidden">Закрыть</span>
          </button>
          <h2 class="modal__title">Подтверждение</h2>
          <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
          <div class="modal__button-wrapper">
            <button class="modal__btn" data-choice="ok">Ок</button>
            <button class="modal__btn" data-choice="cancel">Отмена</button>
          </div>
        </form>
      </section>`;
  }

  onConfirm() { }

  onCancel() { }

  bind() {
    const confirmButton = this.element.querySelector(`[data-choice="ok"]`);
    const cancelButton = this.element.querySelector(`[data-choice="cancel"]`);
    const closeButton = this.element.querySelector('.modal__close');

    const cancelHandler = e => {
      e.preventDefault();
      this.onCancel();
    }

    cancelButton.addEventListener(`click`, cancelHandler);
    closeButton.addEventListener(`click`, cancelHandler);

    confirmButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onConfirm();
    });


  }
}