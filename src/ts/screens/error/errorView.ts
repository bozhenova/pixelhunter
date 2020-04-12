import AbstractView from '../../../abstractView';



export default class ErrorView extends AbstractView {

  constructor(public error: any) {
    super();
  }

  get template() {
    return `<section class="modal">
        <div class="modal__inner">
          <h2 class="modal__title">Произошла ошибка!</h2>
          <p class="modal__text modal__text--error">
            Статус: ${this.error.message} Пожалуйста, перезагрузите страницу.
          </p>
        </div>
      </section>`;
  }


}