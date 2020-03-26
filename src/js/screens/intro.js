import { showGreeting } from "./greeting.js";
import showScreen from "./showScreen.js";

function showIntro() {
  const introScreen = document.querySelector(`#intro`);
  const introAsterisk = document.querySelector(`.intro__asterisk`);

  showScreen(introScreen);

  introAsterisk.addEventListener(`click`, () => {
    showGreeting();
  });
}

export default showIntro;