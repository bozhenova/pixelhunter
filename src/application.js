import IntroScreen from './js/screens/intro/introScreen.js';
import GreetingScreen from './js/screens/greeting/greetingScreen.js';
import RulesScreen from './js/screens/rules/rulesScreen.js';
import GameScreen from './js/screens/game/gameScreen.js';
import ModalScreen from './js/screens/modal/modalScreen.js';
import StatsScreen from './js/screens/stats/statsScreen.js';
import GameModel from './gameModel.js';

const mainContent = document.querySelector(`#main`);

const renderScreen = (screenElement) => {
  if (!screenElement.matches('.modal')) {
    mainContent.innerHTML = ``;
  }
  mainContent.append(screenElement);
};


export default class Application {

  static showIntro() {
    const intro = new IntroScreen();
    intro.changeScreen();
    renderScreen(intro.element);
  }

  static showGreeting() {
    const greeting = new GreetingScreen();
    greeting.changeScreen();
    renderScreen(greeting.element);
  }

  static showRules() {
    const rules = new RulesScreen();
    rules.changeScreen();
    renderScreen(rules.element);
  }

  static showGame(playerName) {
    const model = new GameModel(playerName);
    const gameScreen = new GameScreen(model);
    renderScreen(gameScreen.root);
    gameScreen.startGame();
  }

  static showStats(model) {
    const statistics = new StatsScreen(model);
    statistics.changeScreen();
    renderScreen(statistics.element);
  }

  static showModal() {
    const modal = new ModalScreen();
    modal.changeScreen();
    renderScreen(modal.element);
  }

  static closeModal() {
    mainContent.querySelector('.modal').remove();
  }
}
