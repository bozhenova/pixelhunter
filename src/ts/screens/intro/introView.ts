import AbstractView from "../../abstractView";

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section id="intro" class="intro">
          <button class="intro__asterisk asterisk" type="button">
            <span class="visually-hidden">Продолжить</span>*
          </button>
          <p class="intro__motto">
            <sup>*</sup> Это не фото. Это рисунок маслом нидерландского
            художника-фотореалиста Tjalf Sparnaay.
          </p>
        </section>`;
  }

  onAsteriskButtonClick() { }

  bind() {
    const asteriskButton = this.element.querySelector(`.intro__asterisk`);
    asteriskButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onAsteriskButtonClick();
    });
  }
}
