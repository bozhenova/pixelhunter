import showIntro from "./intro.js";
import { showGreeting } from "./greeting.js";
import { answers } from "../data/data.js";

function main() {
  showIntro();
}

function returnGreeting() {

  function backButtonClickHandler() {
    const mainContent = document.querySelector(`#main`);

    if (mainContent.firstElementChild.classList.contains(`rules__screen`)) {
      document.querySelector(`.back`).removeEventListener(`click`, backButtonClickHandler);
      showGreeting();
    } else {
      const modalConfirmTemplate = document.querySelector(`#modal-confirm`).content.cloneNode(true);
      mainContent.append(modalConfirmTemplate);

      const okButton = document.querySelector('[data-choice="ok"]');
      const cancelButton = document.querySelector('[data-choice="cancel"]');
      const modalCloseButton = document.querySelector('.modal__close');

      function closeModal(e) {
        e.preventDefault();
        document.querySelector(`.modal`).remove();
      }

      //FIXME: баг со всплывающей модалкой при втором нажатии на стрелку назад с экрана rules

      okButton.addEventListener(`click`, () => {
        answers.fill(`unknown`);
        document.querySelector(`.back`).removeEventListener(`click`, backButtonClickHandler);
        document.querySelector(`.modal`).remove();
        showGreeting();
      });

      cancelButton.addEventListener(`click`, (e) => {
        closeModal(e);
      });

      modalCloseButton.addEventListener(`click`, (e) => {
        closeModal(e);
      });
    }
  }
  document.querySelector(`.back`).addEventListener(`click`, backButtonClickHandler);
}

function clearMain() {
  document.querySelector(`#main`).innerHTML = ``;
}


export { returnGreeting, main, clearMain };