import showScreen from "./showScreen.js";
import showIntro from "./intro.js";
import { greetingScreen } from "./greeting.js";
import { answers } from "../data/data.js";

function main() {
  showIntro();
}

function returnGreeting() {
  const backButton = document.querySelector(`.back`);

  backButton.addEventListener('click', () => {
    const mainContent = document.querySelector(`#main`);
    const modalConfirmTemplate = document.querySelector(`#modal-confirm`).content.cloneNode(true);

    mainContent.append(modalConfirmTemplate);
    const okButton = document.querySelector('[data-choice="ok"]');

    okButton.addEventListener(`click`, () => {
      answers.fill(`unknown`);

      clearMain();
      showScreen(greetingScreen);
    });

  });


  function clearMain() {
    document.querySelector(`#main`).innerHTML = ``;
  }

}

export { returnGreeting, main, clearMain };