import greetingScreen from "./greeting";

const introScreen = document.querySelector(`#intro`);
const introAsterisk = document.querySelector(`.intro__asterisk`);

introAsterisk.addEventListener(`click`, () => {
  introScreen.classList.add(`hidden`);
  greetingScreen.classList.remove(`hidden`);
});

export default introScreen;